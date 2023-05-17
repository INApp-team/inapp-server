const ApiError = require("../exceptions/apiErrors");
const axios = require("axios");

class ThirdPartyService {
    async translate(headers, body) {
        if (!headers && !body) {
            throw ApiError.BadRequest("Ошибка формирования перевода");
        }

        const response = await axios.post("http://translation/translate", body, {
            headers: headers
        }).catch(() => {
            throw ApiError.ServerError()
        })

        return response.data
    }

    async detectLanguage(headers, body) {
        if (!headers && !body) {
            throw ApiError.BadRequest("Ошибка определения языка");
        }

        const response = await axios.post("http://translation/detectLanguage", body, {
            headers: headers
        }).catch(() => {
            throw ApiError.ServerError()
        })

        return response.data
    }

}
module.exports = new ThirdPartyService()