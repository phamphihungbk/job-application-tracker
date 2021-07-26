import * as Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

interface UserRequest extends Request {
    value?: { body?: string };
}
export class UserValidator {
    constructor() { }

    validateBody(schema) {
        return async (req: UserRequest, res: Response, next: NextFunction) => {
            try {
                const val = await schema.validateAsync(req.body);
                req.value = req.value ?? {};
                req.value.body = req.value.body ?? val;
                next();
            } catch (error) {
                res.status(400).json(error);
            }
        };
    }
}

export const userSchema = Joi.object().keys({
    userId: Joi.number().integer().required(),
    name: Joi.string().trim(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
});
