const { Translate } = require("@google-cloud/translate").v2;
const ApiError = require("../exceptions/apiErrors")

const CREDENTIALS = JSON.parse(process.env.TRANSLATE_CREDENTIALS);

const translate = new Translate({
    credentials: CREDENTIALS,
    projectId: CREDENTIALS.project_id
});

class TranslateService {
    async detectLanguage (text) {
        if (!text) {
            throw ApiError.BadRequest("Ошибка формирования перевода");
        }
        try {
            let response = await translate.detect(text);
            return response[0].language;
        } catch (error) {
            throw ApiError.ServerError();
        }
    };

    async translateText (text, targetLanguage) {
        if (!text || !targetLanguage) {
            throw ApiError.BadRequest("Ошибка формирования запроса");
        }
        try {
            let [response] = await translate.translate(text, targetLanguage);
            return response;
        } catch (error) {
            throw ApiError.ServerError();
        }
    };

}

module.exports = new TranslateService();
