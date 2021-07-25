import { Application } from 'express';
import jobsRouter from './Jobs';
import usersRouter from './Users';

export default class Routes {
    constructor(app: Application) {
        // jobs routes
        app.use('/api/v1/jobs', jobsRouter);

        // users routes
        app.use('/api/v1/users', usersRouter);
    }
}
