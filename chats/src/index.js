const express = require("express");
const router = require("./router/index");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const { getChatActions } = require("./sockets/chatActions");
const { getVideoChatActions } = require("./sockets/videoChatActions");
const { getSubtitlesActions } = require("./sockets/subtitlesActions");

const PORT = (process.env.PORT && parseInt(process.env.PORT)) || 5200; //chats

const startHttpServer = async () => {
    try {
        const app = express();

        app.use(cors());
        app.use(router);

        const server = http.createServer(app);
        const io = new Server(server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });

        io.on("connection", (socket) => {
            getVideoChatActions(io, socket);
            getChatActions(io, socket);
            getSubtitlesActions(io, socket);
        });

        server.listen(PORT, () => console.log(`CHATS SERVICE STARTED AT PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

startHttpServer();
