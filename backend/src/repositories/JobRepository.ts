import { Job } from '../models/Job';

class JobRepository {
    constructor() { }

    getAllJobs(options) {
        return Job.findAll(options);
    }

    getJobById(id) {
        return Job.findByPk(id);
    }

    getJobsByUser(id) {
        return Job.findAll({ where: { courseId: id } });
    }

    createJob(props: any) {
        return Job.create(props);
    }

    updateJob(id: Number, props: any) {
        return Job.update(props, { where: { id: id.toString() } });
    }

    deleteJob(id: Number) {
        return Job.destroy({ where: { id: id.toString() } });
    }
}

export default new JobRepository();
