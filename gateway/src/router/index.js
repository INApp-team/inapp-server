const Router = require("express").Router;
const UserController = require("../controllers/userController");
const AuthMiddleware = require("../middlewares/authMiddleware");
const ThirdPartyController = require("../controllers/thirdPartyController")

const router = new Router();

//in gateway
router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);

//send to translation service
router.post("/translate", AuthMiddleware, ThirdPartyController.translate)
router.post("/detectLanguage",AuthMiddleware, ThirdPartyController.detectLanguage)

module.exports = router;
