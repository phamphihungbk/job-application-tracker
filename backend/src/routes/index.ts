import { Application } from 'express';
import jobRouter from './Job';
import userRouter from './User';

export default class Routes {
    constructor(app: Application) {
        // jobs routes
        app.use('/api/v1/jobs', jobRouter);

        // users routes
        app.use('/api/v1/users', userRouter);
    }
}
