import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteGamesUseCase } from './DeleteGamesUseCase';

class DeleteGamesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { game_number } = request.body;
        const deleteGamesUseCase = container.resolve(DeleteGamesUseCase);
        await deleteGamesUseCase.execute({ game_number });
        return;
    };
};

export { DeleteGamesController };