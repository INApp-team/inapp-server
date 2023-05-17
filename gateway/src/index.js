const express = require("express");
const errorMiddleware = require("./middlewares/errorMiddleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./router/index");

const PORT = (process.env.PORT && parseInt(process.env.PORT)) || 5100; //auth
const DBURL = process.env.DBURL;

const allowedDomains = ['http://localhost:3000', 'http://localhost:3001', 'http://nwdapp.ru'];

const startHttpServer = async () => {
    try {
        await mongoose.connect(DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const app = express();

        app.use(express.json());
        app.use(cookieParser());
        app.use(cors({
            credentials: true,
            origin: function (origin, callback) {
                if (!origin) return callback(null, true);

                if (allowedDomains.indexOf(origin) === -1) {
                    const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        }));
        app.use(router);
        app.use(errorMiddleware);

        app.listen(PORT, () => console.log(`GATEWAY (AUTH) SERVICE STARTED AT PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

startHttpServer();
