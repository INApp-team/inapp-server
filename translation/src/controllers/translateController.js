const { translateText, detectLanguage } = require("../translate");

class TranslateController {
    async translate(req, res) {
        try {
            const { text, targetLang } = req.body;
            if (!text || !targetLang) {
                return res.status(404).json({ message: "Bad request" });
            }

            const translatedText = await translateText(text, targetLang);
            return res.json(translatedText);
        } catch (e) {
            return res.status(500).json({ message: "Translation error" });
        }
    }
    async detectLanguage(req, res) {
        try {
            const { text } = req.body;
            if (!text) {
                return res.status(404).json({ message: "Bad request" });
            }

            const translatedText = await detectLanguage(text);
            return res.json(translatedText);
        } catch (e) {
            return res.status(500).json({ message: "Translation error" });
        }
    }
}

module.exports = new TranslateController();
