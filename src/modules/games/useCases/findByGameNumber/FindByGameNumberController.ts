import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByGameNumberUseCase } from './FindByGameNumberUseCase';

class FindByGameNumberController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { game_number } = request.query;
        const findByGameNumberUseCase = container.resolve(FindByGameNumberUseCase);
        const game = await findByGameNumberUseCase.execute({ game_number });
        return response.json(game);
    };
};

export { FindByGameNumberController };