import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateGameUseCase } from './CreateGameUseCase';
import { IGamesDTO } from '../../dtos/IGamesDTO';

class CreateGameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const mock: IGamesDTO[] = request.body;
        
        const createGameUseCase = container.resolve(CreateGameUseCase);
        
        const games = mock.map(async item => {
    
        await createGameUseCase.execute(item);
        })
        
        return response.status(201).json(games);
    };
};

export { CreateGameController };
