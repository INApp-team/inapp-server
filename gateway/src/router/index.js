const Router = require("express").Router;
const UserController = require("../controllers/userController");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = new Router();

router.get("/", (req, res) => res.send("123"));
router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);
//rest reqs

module.exports = router;
