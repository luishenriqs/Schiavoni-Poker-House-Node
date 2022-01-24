import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListGamesUseCase } from './ListGamesUseCase';

class ListGamesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listGamesUseCase = container.resolve(ListGamesUseCase);
        const all = await listGamesUseCase.execute();
        return response.json(all);
    };
};

export { ListGamesController };