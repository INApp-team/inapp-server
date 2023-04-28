const ACTIONS = require("./constants");
const getVideoChatActions = (io, socket) => {
    socket.emit(ACTIONS.SOCKET_ID, socket.id);

    socket.on(ACTIONS.CALL_USER, async ({ userToCall, signalData, from, name }) => {
        const ids = await io.allSockets();
        const idsArray = [...ids];
        if (idsArray.includes(userToCall)) {
            io.to(userToCall).emit(ACTIONS.CALL_USER, { from, name, signal: signalData }); //current call
            socket.emit(ACTIONS.CALL_SENT, "Запрос на встречу успешно отправлен!")
        } else {
            socket.emit(ACTIONS.CALL_SENT, "Неверный код встречи!")
        }
    });

    socket.on(ACTIONS.ANSWER_CALL, (data) => {
        io.to(data.to).emit(ACTIONS.CALL_ACCEPTED, data.signal);
    });

    socket.on("disconnect", () => {
        socket.broadcast.emit(ACTIONS.CALL_ENDED);
    });
};

module.exports = { getVideoChatActions };
