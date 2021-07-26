import { Router } from 'express';
import JobController from '../controllers/JobController';

class JobRoutes {
    router = Router();
    jobController = new JobController();

    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').get(this.jobController.getAllJobs);
        // this.router.route('/:id').get(this.jobController.getJobDetails);
    }
}
export default new JobRoutes().router;
