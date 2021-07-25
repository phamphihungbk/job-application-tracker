import { Router } from 'express';
import StagesController from '../controllers/StagesController';
import { StagesValidator, stagesSchema } from '../validators/stagesValidator';

class StagesRoutes {
    router = Router();
    stagesController = new StagesController();
    stagesValidator = new StagesValidator();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        this.router.route('/').get(this.stagesController.getAllStages);
        this.router.route('/stages/:id')
            .get(this.stagesController.getStagesByJob);
        this.router.route('/:id').get(this.stagesController.getLessonById);
        this.router.route('/')
            .post(
                this.stagesValidator.validateBody(stagesSchema),
                this.stagesController.createLesson
            );
        this.router.route('/:id')
            .put(
                this.stagesValidator.validateBody(stagesSchema),
                this.stagesController.updateLesson
            );
        this.router.route('/:id').delete(this.stagesController.deleteStages);
    }
}

export default new StagesRoutes().router;
