import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateGameUseCase } from './CreateGameUseCase';

class CreateGameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            id,
            game_number,
            classification,
            user_id,
            user_name,
            points,
        } = request.body;
       
        /* ***********************[CREATING NEW GAME]************************ */ 
        const createGameUseCase = container.resolve(CreateGameUseCase);

        const game = await createGameUseCase.execute({
            id,
            game_number,
            classification,
            user_id,
            user_name,
            points,
        });
    
        return response.status(201).json(game);
    };
};

export { CreateGameController };