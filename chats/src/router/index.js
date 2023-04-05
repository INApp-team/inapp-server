const Router = require("express").Router;

const router = new Router();

router.get("/", (req, res) => res.send("hello, 5100"));

module.exports = router;
