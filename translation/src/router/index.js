const Router = require("express").Router;
const TranslateController = require("../controllers/translateController");

const router = new Router();

router.post("/translate", TranslateController.translate);
router.post("/detectLanguage", TranslateController.detectLanguage);

module.exports = router;
