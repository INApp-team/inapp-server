const ApiError = require("../exceptions/apiErrors")
const axios = require("axios");

class TranslateService {
    async detectLanguage (text) {
        if (!text) {
            throw ApiError.BadRequest("Ошибка формирования перевода");
        }
        try {
            let response = await axios.post("https://translate.api.cloud.yandex.net/translate/v2/detect", {
                text,
                folderId: process.env.YANDEX_FOLDER_ID
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.YANDEX_TOKEN}`,
                }
            })
            return response.data.languageCode;
        } catch (error) {
            throw ApiError.ServerError();
        }
    };

    async translateText (text, targetLanguage) {
        if (!text || !targetLanguage) {
            throw ApiError.BadRequest("Ошибка формирования запроса");
        }
        try {
            let response = await axios.post("https://translate.api.cloud.yandex.net/translate/v2/translate", {
                texts: [text],
                targetLanguageCode: targetLanguage,
                folderId: process.env.YANDEX_FOLDER_ID
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.YANDEX_TOKEN}`,
                }
            })
            return response.data.translations[0].text;
        } catch (error) {
            throw ApiError.ServerError();
        }
    };

}

module.exports = new TranslateService();
