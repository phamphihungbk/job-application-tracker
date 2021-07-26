import { Router } from 'express';
import UserController from '../controllers/UserController';
import { UserValidator, userSchema } from '../validators/userValidator';

class UserRoutes {
    router = Router();
    userController = new UserController();
    userValidator = new UserValidator();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        this.router.route('/').get(this.userController.getAllUsers);
        this.router.route('/:id').get(this.userController.getUserById);
        this.router.route('/')
            .post(
                this.userValidator.validateBody(userSchema),
                this.userController.createUser
            );
        this.router.route('/:id')
            .patch(
                this.userValidator.validateBody(userSchema),
                this.userController.updateUser
            );
        this.router.route('/:id').delete(this.userController.deleteUser);
    }
}

export default new UserRoutes().router;
