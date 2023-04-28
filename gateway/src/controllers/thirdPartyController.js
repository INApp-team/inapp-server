const ThirdPartyService = require("../service/thirdPartyService");
class ThirdPartyController {
    async translate(req, res, next) {
        try {
            const {headers, body} = req;
            const result = await ThirdPartyService.translate(headers, body);
            return res.json(result);
        }
        catch (e) {
            next(e)
        }
    }

    async detectLanguage(req, res, next) {
        try {
            const {headers, body} = req;
            const result = await ThirdPartyService.detectLanguage(headers, body);
            return res.json(result);
        }
        catch (e) {
            next(e)
        }
    }
}
module.exports = new ThirdPartyController();
