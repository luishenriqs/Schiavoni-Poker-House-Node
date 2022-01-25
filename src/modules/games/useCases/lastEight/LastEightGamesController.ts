import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LastEightGamesUseCase } from './LastEightGamesUseCase';

class LastEightGamesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const lastEightGamesUseCase = container.resolve(LastEightGamesUseCase);
        const lastEight = await lastEightGamesUseCase.execute();
        return response.json(lastEight);
    };
};

export { LastEightGamesController };