"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Job_1 = require("../models/Job");
class JobRepository {
    constructor() { }
    getAllJobs(options) {
        return Job_1.Job.findAll(options);
    }
    getJobById(id) {
        return Job_1.Job.findByPk(id);
    }
    getJobsByUser(id) {
        return Job_1.Job.findAll({ where: { courseId: id } });
    }
    createJob(props) {
        return Job_1.Job.create(props);
    }
    updateJob(id, props) {
        return Job_1.Job.update(props, { where: { id: id.toString() } });
    }
    deleteJob(id) {
        return Job_1.Job.destroy({ where: { id: id.toString() } });
    }
}
exports.default = new JobRepository();
//# sourceMappingURL=JobRepository.js.map