import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import { UsersValidator, usersSchema } from '../validators/usersValidator';

class UsersRoutes {
    router = Router();
    usersController = new UsersController();
    usersValidator = new UsersValidator();

    constructor() {
        this.intializeRoutes();
    }

    intializeRoutes() {

        this.router.route('/').get(this.usersController.getAllUsers);
        this.router.route('/:id').get(this.usersController.getUserById);
        this.router.route('/')
            .post(
                this.usersValidator.validateBody(usersSchema),
                this.usersController.createUser
            );
        this.router.route('/:id')
            .put(
                this.usersValidator.validateBody(usersSchema),
                this.usersController.updateUser
            );
        this.router.route('/:id').delete(this.usersController.deleteUser);
    }
}

export default new UsersRoutes().router;
