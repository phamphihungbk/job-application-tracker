import { Application } from 'express';
import stagesRouter from './Stages';
import jobsRouter from './Jobs';

export default class Routes {
    constructor(app: Application) {
        // stages routes
        app.use('/api/v1/stages', stagesRouter);

        // jobs routes
        app.use('/api/v1/jobs', jobsRouter);
    }
}
