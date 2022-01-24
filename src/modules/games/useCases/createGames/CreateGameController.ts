import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateGameUseCase } from './CreateGameUseCase';

interface IRequest {
    id?: number;
    game_number: number;
    classification: string;
    user_id: number;
    user_name: string;
    points: number;
}

// const mock: IRequest[] = [
//     {
//         "game_number": 1,
//         "classification": "first",
//         "user_id": 4,
//         "user_name": "Luisão",
//         "points": 25
//     },
//     {

//         "game_number": 1,
//         "classification": "second",
//         "user_id": 5,
//         "user_name": "Diego",
//         "points": 18
//     },
//     {
//         "game_number": 1,
//         "classification": "third",
//         "user_id": 8,
//         "user_name": "Paulinho",
//         "points": 15
//     },
//     {
//         "game_number": 1,
//         "classification": "fourth",
//         "user_id": 7,
//         "user_name": "Roger",
//         "points": 12
//     },
//     {
//         "game_number": 1,
//         "classification": "fifth",
//         "user_id": 3,
//         "user_name": "Dú Schiavoni",
//         "points": 10
//     },
//     {
//         "game_number": 1,
//         "classification": "sixth",
//         "user_id": 1,
//         "user_name": "Filipi",
//         "points": 8
//     },
//     {
//         "game_number": 1,
//         "classification": "seventh",
//         "user_id": 6,
//         "user_name": "Leandro",
//         "points": 6
//     },
//     {
//         "game_number": 1,
//         "classification": "eighth",
//         "user_id": 10,
//         "user_name": "Márcio",
//         "points": 4
//     },
//     {
//         "game_number": 1,
//         "classification": "ninth",
//         "user_id": 2,
//         "user_name": "Dr. Bó",
//         "points": 2
//     },
//     {
//         "game_number": 1,
//         "classification": "tenth",
//         "user_id": 9,
//         "user_name": "Léo Criado",
//         "points": 1
//     }
// ]

class CreateGameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const mock: IRequest[] = request.body;
        
        const createGameUseCase = container.resolve(CreateGameUseCase);
        
        const games = mock.map(async item => {
    
        await createGameUseCase.execute(item);
        })
        
        return response.status(201).json(games);
    };
};

export { CreateGameController };
