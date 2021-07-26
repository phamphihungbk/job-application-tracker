"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const userValidator_1 = require("../validators/userValidator");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.userController = new UserController_1.default();
        this.userValidator = new userValidator_1.UserValidator();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').get(this.userController.getAllUsers);
        this.router.route('/:id').get(this.userController.getUserById);
        this.router.route('/')
            .post(this.userValidator.validateBody(userValidator_1.userSchema), this.userController.createUser);
        this.router.route('/:id')
            .patch(this.userValidator.validateBody(userValidator_1.userSchema), this.userController.updateUser);
        this.router.route('/:id').delete(this.userController.deleteUser);
    }
}
exports.default = new UserRoutes().router;
//# sourceMappingURL=User.js.map