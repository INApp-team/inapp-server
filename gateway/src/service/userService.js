const UserModel = require("../models/userModel");
const ApiError = require("../exceptions/apiErrors");
const TokenService = require("./tokenService");
const UserDto = require("../dtos/userDto");
const bcrypt = require("bcrypt");

class UserService {
    async registration(login, password) {
        const candidate = await UserModel.findOne({ login });
        if (candidate) {
            throw ApiError.BadRequest("Пользователь с таким логином уже есть");
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({ login, password: hashPassword });

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({ ...userDto });
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        };
    }

    async login(login, password) {
        const user = await UserModel.findOne({ login });
        if (!user) {
            throw ApiError.BadRequest("Нет пользователя с таким логином");
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw ApiError.BadRequest("Неверный пароль");
        }

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({ ...userDto });
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto
        };
    }

    async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken);
        return token;
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }
        const userData = TokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await TokenService.findToken(refreshToken);
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await UserModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({ ...userDto });
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return {
            ...tokens,
            user: userDto
        };
    }
}
module.exports = new UserService();
