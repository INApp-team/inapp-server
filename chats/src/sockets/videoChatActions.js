const ACTIONS = require("./constants");
const getVideoChatActions = (io, socket) => {
    socket.emit(ACTIONS.SOCKET_ID, socket.id);

    socket.on(ACTIONS.CALL_USER, ({ userToCall, signalData, from, name }) => {
        io.to(userToCall).emit(ACTIONS.CALL_USER, { from, name, signal: signalData }); //current call
    });

    socket.on(ACTIONS.ANSWER_CALL, (data) => {
        io.to(data.to).emit(ACTIONS.CALL_ACCEPTED, data.signal);
    });

    socket.on("disconnect", () => {
        console.log("disconnect");
        socket.broadcast.emit(ACTIONS.CALL_ENDED);
    });
};

module.exports = { getVideoChatActions };
