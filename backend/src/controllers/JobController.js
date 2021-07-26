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
const JobRepository_1 = require("../repositories/JobRepository");
class JobController {
    constructor() { }
    getAllJobs(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield JobRepository_1.default.getAllJobs({ order: ['id'] });
                res.json(users);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, 'Fetch All Jobs failed.');
            }
        });
    }
    getJobsByUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield JobRepository_1.default.getJobsByUser(req.params.id);
                res.json(user);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `Job belongs to user ${req.params.id} failed.`);
            }
        });
    }
    getJobById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield JobRepository_1.default.getJobById(req.params.id);
                if (result) {
                    return res.json(result);
                }
                else {
                    res.status(404).send(`Job ${req.params.id} not found.`);
                }
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `Job ${req.params.id} failed.`);
            }
        });
    }
    createJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield JobRepository_1.default.createJob(req['value']['body']);
                res.json(result);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, 'Creation of Job failed.');
            }
        });
    }
    updateJob(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const result = yield JobRepository_1.default.updateJob(id, req['value']['body']);
                res.json(result);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `updation of Job ${req.params.id} is failed.`);
            }
        });
    }
    deleteJobs(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const result = yield JobRepository_1.default.deleteJob(id);
                res.json(result);
            }
            catch (error) {
                errorHandler_1.apiErrorHandler(error, req, res, `deletion of Job ${req.params.id}  is failed.`);
            }
        });
    }
}
exports.default = JobController;
//# sourceMappingURL=JobController.js.map