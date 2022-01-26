import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UserStatsUseCase } from './UserStatsUseCase';

class UserStatsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.query;
        const userStatsUseCase = container.resolve(UserStatsUseCase);
        const userStats = await userStatsUseCase.execute({ user_id });
        return response.json(userStats);
    };
};

export { UserStatsController };