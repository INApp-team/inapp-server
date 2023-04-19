const TranslateService = require("../service/translateService")

class TranslateController {
    async translate(req, res, next) {
        try {
            const { text, targetLang } = req.body;

            const translatedText = await TranslateService.translateText(text, targetLang);
            return res.json(translatedText);
        } catch (e) {
            next(e)
        }
    }
    async detectLanguage(req, res, next) {
        try {
            const { text } = req.body;

            const translatedText = await TranslateService.detectLanguage(text);
            return res.json(translatedText);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new TranslateController();
