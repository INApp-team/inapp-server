const ACTIONS = require("./constants");
const getChatActions = (io, socket) => {
    //when any user first join - send emit of chat message to everyone
    socket.on(ACTIONS.JOIN_CHAT, ({ userName }) => {
        io.emit(ACTIONS.CHAT_MESSAGE, {
            user: "admin",
            message: `Пользователь ${userName} вошел в чат`
        });

        //when me user send message - send this message to all rest users
        socket.on(ACTIONS.SEND_CHAT_MESSAGE, ({ message, userName }) => {
            socket.broadcast.emit(ACTIONS.CHAT_MESSAGE, { user: userName, message });
        });

        //when any user disconnect - send emit of chat message to everyone
        socket.on("disconnect", () => {
            io.emit(ACTIONS.CHAT_MESSAGE, {
                user: "admin",
                message: `Пользователь ${userName} вышел из чата`
            });
        });
    });
};

module.exports = { getChatActions };
