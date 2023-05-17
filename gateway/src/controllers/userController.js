const UserService = require("../service/userService");

const setCookie = (res, userData) => {
    res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        domain: !!process.env.PRODUCTION ? "nwdapp.ru" : undefined,
    });
}

class UserController {
    async registration(req, res, next) {
        try {
            const { login, password } = req.body;
            const userData = await UserService.registration(login, password);
            setCookie(res, userData);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { login, password } = req.body;
            const userData = await UserService.login(login, password);
            setCookie(res, userData);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            await UserService.logout(refreshToken);

            res.clearCookie("refreshToken");
            return res.sendStatus(200);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            const userData = await UserService.refresh(refreshToken);
            setCookie(res, userData);
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();
