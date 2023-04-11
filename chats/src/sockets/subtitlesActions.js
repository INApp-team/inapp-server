const ACTIONS = require("./constants");
const getSubtitlesActions = (io, socket) => {
    socket.on(ACTIONS.SUBTITLE_SENT, (subtitle) => {
        socket.broadcast.emit(ACTIONS.SUBTITLE, subtitle);
    });
};

module.exports = { getSubtitlesActions };
