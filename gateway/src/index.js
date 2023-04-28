const express = require("express");
const errorMiddleware = require("./middlewares/errorMiddleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/index");

const PORT = (process.env.PORT && parseInt(process.env.PORT)) || 5000; //auth
const DBURL = process.env.DBURL;

const startHttpServer = async () => {
    try {
        await mongoose.connect(DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const app = express();

        app.use(express.json());
        app.use(cookieParser());
        app.use(
            cors({
                credentials: true,
                origin: "http://localhost:3000"
            })
        );
        app.use(router);
        app.use(errorMiddleware);

        app.listen(PORT, () => console.log(`GATEWAY (AUTH) SERVICE STARTED AT PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

startHttpServer();
