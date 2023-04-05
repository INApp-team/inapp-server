const ACTIONS = require("./constants");
const getChatActions = (io, socket) => {
    socket.on(ACTIONS.JOIN_CHAT, ({ userName }) => {
        //when any user first join - send emit of chat message to everyone
        io.emit(ACTIONS.CHAT_MESSAGE, {
            user: "admin",
            message: `User ${userName} has joined!`
        });

        //when me user send message - send this message to all rest users
        socket.on(ACTIONS.SEND_CHAT_MESSAGE, ({ message, userName }) => {
            socket.broadcast.emit(ACTIONS.CHAT_MESSAGE, { user: userName, message });
        });

        socket.on("disconnect", () => {
            //when any user disconnect - send emit of chat message to everyone
            io.emit(ACTIONS.CHAT_MESSAGE, {
                user: "admin",
                message: `User ${userName} has disconnected!`
            });
        });
    });
};

module.exports = { getChatActions };
