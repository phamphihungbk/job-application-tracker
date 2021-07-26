"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
class UserRepository {
    constructor() { }
    getAllUsers(options) {
        return User_1.User.findAll(options);
    }
    getUserById(id) {
        return User_1.User.findByPk(id);
    }
    createUser(props) {
        return User_1.User.create(props);
    }
    updateUser(id, props) {
        return User_1.User.update(props, { where: { id: id.toString() } });
    }
    deleteUser(id) {
        return User_1.User.destroy({ where: { id: id.toString() } });
    }
}
exports.default = new UserRepository();
//# sourceMappingURL=UserRepository.js.map