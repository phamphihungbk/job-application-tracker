"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("../handlers/errorHandler");
const UserRepository_1 = require("../repositories/UserRepository");
class UserController {
    constructor() { }
    getAllUsers(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserRepository_1.default.getAllUsers({ order: ['id'] });
                res.json(users);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, 'Fetch All Users failed.');
            }
        });
    }
    getUserById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserRepository_1.default.getUserById(req.params.id);
                if (result) {
                    return res.json(result);
                }
                else {
                    res.status(404).send(`User ${req.params.id} not found.`);
                }
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `User ${req.params.id} failed.`);
            }
        });
    }
    createUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield UserRepository_1.default.createUser(req['value']['body']);
                res.json(result);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, 'Creation of User failed.');
            }
        });
    }
    updateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const result = yield UserRepository_1.default.updateUser(id, req['value']['body']);
                res.json(result);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `updation of User ${req.params.id} is failed.`);
            }
        });
    }
    deleteUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const result = yield UserRepository_1.default.deleteUser(id);
                res.json(result);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `deletion of User ${req.params.id}  is failed.`);
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map