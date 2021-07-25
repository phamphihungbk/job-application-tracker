import { Request, Response, NextFunction } from 'express';
import { apiErrorHandler } from '../handlers/errorHandler';
import JobRepository from '../repositories/JobRepository';

export default class JobsController {
    constructor() { }

    async getAllJobs(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await JobRepository.getAllJobs({ order: ['id'] });
            res.json(users);
        } catch (error) {
            apiErrorHandler(error, req, res, 'Fetch All Jobs failed.');
        }
    }

    async getJobsByUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await JobRepository.getJobsByUser(req.params.id);
            res.json(user);
        } catch (error) {
            apiErrorHandler(
                error,
                req,
                res,
                `Job belongs to user ${req.params.id} failed.`,
            );
        }
    }

    async getJobById(req: Request, res: any, next: NextFunction) {
        try {
            const result = await JobRepository.getJobById(req.params.id);
            if (result) {
                return res.json(result);
            } else {
                res.status(404).send(`Job ${req.params.id} not found.`);
            }
        } catch (error) {
            apiErrorHandler(error, req, res, `Job ${req.params.id} failed.`);
        }
    }

    async createJob(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await JobRepository.createJob(req['value']['body']);
            res.json(result);
        } catch (error) {
            apiErrorHandler(error, req, res, 'Creation of Job failed.');
        }
    }

    async updateJob(req: Request, res: Response, next: NextFunction) {
        const id = parseInt(req.params.id);
        try {
            const result = await JobRepository.updateJob(id, req['value']['body']);
            res.json(result);
        } catch (error) {
            apiErrorHandler(
                error,
                req,
                res,
                `updation of Job ${req.params.id} is failed.`,
            );
        }
    }

    async deleteJobs(req: Request, res: Response, next: NextFunction) {
        const id = parseInt(req.params.id);
        try {
            const result = await JobRepository.deleteJob(id);
            res.json(result);
        } catch (error) {
            apiErrorHandler(
                error,
                req,
                res,
                `deletion of Job ${req.params.id}  is failed.`,
            );
        }
    }
}
