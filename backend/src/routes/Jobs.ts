import { Router } from 'express';
import JobsController from '../controllers/JobsController';

class JobsRoutes {
    router = Router();
    jobController = new JobsController();

    constructor() {
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.route('/').get(this.jobController.getAllJobs);
        this.router.route('/:id').get(this.jobController.getJobDetails);
    }
}
export default new JobsRoutes().router;
