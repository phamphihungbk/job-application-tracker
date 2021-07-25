import { User } from '../models/User';

class UserRepository {
    constructor() { }

    getAllUsers(options) {
        return User.findAll(options);
    }

    getUserById(id) {
        return User.findByPk(id);
    }

    createUser(props: any) {
        return User.create(props);
    }

    updateUser(id: Number, props: any) {
        return User.update(props, { where: { id: id.toString() } });
    }

    deleteUser(id: Number) {
        return User.destroy({ where: { id: id.toString() } });
    }
}

export default new UserRepository();
