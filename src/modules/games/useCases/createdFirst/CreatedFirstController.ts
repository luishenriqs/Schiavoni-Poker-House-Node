import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatedFirstUseCase } from './CreatedFirstUseCase';
import { IGamesDTO } from '../../dtos/IGamesDTO';


/* ****** RESULTADOS DA TEMPORADA 20 ****** */
const first_games: IGamesDTO[] = [
    {
        "game_number": 1,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 1,
        "classification": "second",
        "user_id": 5,
        "points": 18
    },
    {
        "game_number": 1,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 1,
        "classification": "fourth",
        "user_id": 7,
        "points": 12
    },
    {
        "game_number": 1,
        "classification": "fifth",
        "user_id": 3,
        "points": 10
    },
    {
        "game_number": 1,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 1,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 1,
        "classification": "eighth",
        "user_id": 10,
        "points": 4
    },
    {
        "game_number": 1,
        "classification": "ninth",
        "user_id": 2,
        "points": 2
    },
    {
        "game_number": 1,
        "classification": "tenth",
        "user_id": 9,
        "points": 1
    },
    {
        "game_number": 2,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 2,
        "classification": "second",
        "user_id": 5,
        "points": 18
    },
    {
        "game_number": 2,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 2,
        "classification": "fourth",
        "user_id": 7,
        "points": 12
    },
    {
        "game_number": 2,
        "classification": "fifth",
        "user_id": 3,
        "points": 10
    },
    {
        "game_number": 2,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 2,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 2,
        "classification": "eighth",
        "user_id": 10,
        "points": 4
    },
    {
        "game_number": 2,
        "classification": "ninth",
        "user_id": 2,
        "points": 2
    },
    {
        "game_number": 2,
        "classification": "tenth",
        "user_id": 9,
        "points": 1
    },
    {
        "game_number": 3,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 3,
        "classification": "second",
        "user_id": 5,
        "points": 18
    },
    {
        "game_number": 3,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 3,
        "classification": "fourth",
        "user_id": 7,
        "points": 12
    },
    {
        "game_number": 3,
        "classification": "fifth",
        "user_id": 3,
        "points": 10
    },
    {
        "game_number": 3,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 3,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 3,
        "classification": "eighth",
        "user_id": 10,
        "points": 4
    },
    {
        "game_number": 3,
        "classification": "ninth",
        "user_id": 2,
        "points": 2
    },
    {
        "game_number": 3,
        "classification": "tenth",
        "user_id": 9,
        "points": 1
    },
    {
        "game_number": 4,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 4,
        "classification": "second",
        "user_id": 5,
        "points": 18
    },
    {
        "game_number": 4,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 4,
        "classification": "fourth",
        "user_id": 7,
        "points": 12
    },
    {
        "game_number": 4,
        "classification": "fifth",
        "user_id": 3,
        "points": 10
    },
    {
        "game_number": 4,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 4,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 4,
        "classification": "eighth",
        "user_id": 10,
        "points": 4
    },
    {
        "game_number": 4,
        "classification": "ninth",
        "user_id": 2,
        "points": 2
    },
    {
        "game_number": 4,
        "classification": "tenth",
        "user_id": 9,
        "points": 1
    },
    {
        "game_number": 5,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 5,
        "classification": "second",
        "user_id": 5,
        "points": 18
    },
    {
        "game_number": 5,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 5,
        "classification": "fourth",
        "user_id": 7,
        "points": 12
    },
    {
        "game_number": 5,
        "classification": "fifth",
        "user_id": 3,
        "points": 10
    },
    {
        "game_number": 5,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 5,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 5,
        "classification": "eighth",
        "user_id": 10,
        "points": 4
    },
    {
        "game_number": 5,
        "classification": "ninth",
        "user_id": 2,
        "points": 2
    },
    {
        "game_number": 5,
        "classification": "tenth",
        "user_id": 9,
        "points": 1
    },
    {
        "game_number": 6,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 1,
        "classification": "second",
        "user_id": 5,
        "points": 18
    },
    {
        "game_number": 6,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 6,
        "classification": "fourth",
        "user_id": 7,
        "points": 12
    },
    {
        "game_number": 6,
        "classification": "fifth",
        "user_id": 3,
        "points": 10
    },
    {
        "game_number": 6,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 6,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 6,
        "classification": "eighth",
        "user_id": 10,
        "points": 4
    },
    {
        "game_number": 6,
        "classification": "ninth",
        "user_id": 2,
        "points": 2
    },
    {
        "game_number": 6,
        "classification": "tenth",
        "user_id": 9,
        "points": 1
    },
    {
        "game_number": 7,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 7,
        "classification": "second",
        "user_id": 5,
        "points": 18
    },
    {
        "game_number": 7,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 7,
        "classification": "fourth",
        "user_id": 7,
        "points": 12
    },
    {
        "game_number": 7,
        "classification": "fifth",
        "user_id": 3,
        "points": 10
    },
    {
        "game_number": 7,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 7,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 7,
        "classification": "eighth",
        "user_id": 10,
        "points": 4
    },
    {
        "game_number": 7,
        "classification": "ninth",
        "user_id": 2,
        "points": 2
    },
    {
        "game_number": 7,
        "classification": "tenth",
        "user_id": 9,
        "points": 1
    },
    {
        "game_number": 8,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 8,
        "classification": "second",
        "user_id": 5,
        "points": 18
    },
    {
        "game_number": 8,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 8,
        "classification": "fourth",
        "user_id": 7,
        "points": 12
    },
    {
        "game_number": 8,
        "classification": "fifth",
        "user_id": 3,
        "points": 10
    },
    {
        "game_number": 8,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 8,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 8,
        "classification": "eighth",
        "user_id": 10,
        "points": 4
    },
    {
        "game_number": 8,
        "classification": "ninth",
        "user_id": 2,
        "points": 2
    },
    {
        "game_number": 8,
        "classification": "tenth",
        "user_id": 9,
        "points": 1
    },
]

class CreatedFirstController {
    async handle(request: Request, response: Response): Promise<Response> {
       
        const createdFirstUseCase = container.resolve(CreatedFirstUseCase);
        
        let games = first_games.map(async item => {
    
           await createdFirstUseCase.execute(item);
        });
        
        return response.status(201).json(games);
    };
};

export { CreatedFirstController };