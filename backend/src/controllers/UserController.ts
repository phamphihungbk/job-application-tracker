import { Request, Response, NextFunction } from 'express';
import { apiErrorHandler } from '../handlers/errorHandler';
import UserRepository from '../repositories/UserRepository';

export default class UserController {
    constructor() { }

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await UserRepository.getAllUsers({ order: ['id'] });
            res.json(users);
        } catch (error) {
            apiErrorHandler(error, req, res, 'Fetch All Users failed.');
        }
    }

    async getUserById(req: Request, res: any, next: NextFunction) {
        try {
            const result = await UserRepository.getUserById(req.params.id);
            if (result) {
                return res.json(result);
            } else {
                res.status(404).send(`User ${req.params.id} not found.`);
            }
        } catch (error) {
            apiErrorHandler(error, req, res, `User ${req.params.id} failed.`);
        }
    }

    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await UserRepository.createUser(req['value']['body']);
            res.json(result);
        } catch (error) {
            apiErrorHandler(error, req, res, 'Creation of User failed.');
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        const id = parseInt(req.params.id);
        try {
            const result = await UserRepository.updateUser(id, req['value']['body']);
            res.json(result);
        } catch (error) {
            apiErrorHandler(
                error,
                req,
                res,
                `updation of User ${req.params.id} is failed.`,
            );
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        const id = parseInt(req.params.id);
        try {
            const result = await UserRepository.deleteUser(id);
            res.json(result);
        } catch (error) {
            apiErrorHandler(
                error,
                req,
                res,
                `deletion of User ${req.params.id}  is failed.`,
            );
        }
    }
}
