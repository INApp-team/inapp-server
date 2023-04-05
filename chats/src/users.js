const { getTrimmedStr } = require("./utils");
const users = [];

const findUser = (user) => {
    const userName = getTrimmedStr(user.userName);
    const userRoom = getTrimmedStr(user.room);

    return users.find(
        (u) => getTrimmedStr(u.userName) === userName && getTrimmedStr(u.room) === userRoom
    );
};

const addUser = (user) => {
    const isUserExist = findUser(user);

    !isUserExist && users.push(user);

    return { isExist: !!isUserExist, user: isUserExist || user };
};

module.exports = { addUser, findUser };
