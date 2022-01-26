import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LastEightPerUserUseCase } from './LastEightPerUserUseCase';

class LastEightPerUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.query;
        const lastEightPerUserUseCase = container.resolve(LastEightPerUserUseCase);
        const lastEightPerUser = await lastEightPerUserUseCase.execute({ user_id });
        return response.json(lastEightPerUser);
    };
};

export { LastEightPerUserController };