"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JobController_1 = require("../controllers/JobController");
class JobRoutes {
    constructor() {
        this.router = express_1.Router();
        this.jobController = new JobController_1.default();
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').get(this.jobController.getAllJobs);
        // this.router.route('/:id').get(this.jobController.getJobDetails);
    }
}
exports.default = new JobRoutes().router;
//# sourceMappingURL=Job.js.map