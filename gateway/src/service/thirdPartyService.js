const fetch = require("node-fetch");
const ApiError = require("../exceptions/apiErrors");

class ThirdPartyService {
    async translate(headers, body) {
        if (!headers && !body) {
            throw ApiError.BadRequest("Ошибка формирования перевода");
        }

        const response = await fetch("http://translation/translate", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            throw ApiError.ServerError();
        }

        return await response.json();
    }

    async detectLanguage(headers, body) {
        if (!headers && !body) {
            throw ApiError.BadRequest("Ошибка формирования перевода");
        }

        const response = await fetch("http://translation/detectLanguage", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        })

        if (!response.ok) {
            throw ApiError.ServerError();
        }

        return await response.json();
    }

}
module.exports = new ThirdPartyService()