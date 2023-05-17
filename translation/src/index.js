const express = require("express");
const router = require("./router/index");
const cors = require("cors");
const errorMiddleware = require("./middlewares/errorMiddleware");

const PORT = (process.env.PORT && parseInt(process.env.PORT)) || 5300; //translation

const startHttpServer = async () => {
    try {
        const app = express();

        app.use(express.json());
        app.use(
            cors({
                origin: "*",
                methods: ["GET", "POST"]
            })
        );
        app.use(router);
        app.use(errorMiddleware);

        app.listen(PORT, () => console.log(`TRANSLATION SERVICE STARTED AT PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

startHttpServer();
