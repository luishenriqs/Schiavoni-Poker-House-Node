import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatedFirstUseCase } from './CreatedFirstUseCase';
import { IGamesDTO } from '../../dtos/IGamesDTO';


/* PARTICIPANTES
Id 1 - Dú Schiavoni
Id 2 - Luisão
Id 3 - Leandro
Id 4 - Diego
Id 5 - Filipi
Id 6 - Dr. Bó
Id 7 - Roger
Id 8 - Márcio
Id 9 - Paulinho
Id 10 - Léo Criado
Id 11 - Ednelson
Id 12 - None
*/

/* **************************************** */
/* ****** RESULTADOS DA TEMPORADA 20 ****** */
/* **************************************** */
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
        "user_id": 9,
        "points": 18
    },
    {
        "game_number": 1,
        "classification": "third",
        "user_id": 6,
        "points": 15
    },
    {
        "game_number": 1,
        "classification": "fourth",
        "user_id": 2,
        "points": 12
    },
    {
        "game_number": 1,
        "classification": "fifth",
        "user_id": 8,
        "points": 10
    },
    {
        "game_number": 1,
        "classification": "sixth",
        "user_id": 3,
        "points": 8
    },
    {
        "game_number": 1,
        "classification": "seventh",
        "user_id": 7,
        "points": 6
    },
    {
        "game_number": 1,
        "classification": "eighth",
        "user_id": 1,
        "points": 4
    },
    {
        "game_number": 1,
        "classification": "ninth",
        "user_id": 5,
        "points": 2
    },
    {
        "game_number": 1,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 2,
        "classification": "first",
        "user_id": 9,
        "points": 25
    },
    {

        "game_number": 2,
        "classification": "second",
        "user_id": 1,
        "points": 18
    },
    {
        "game_number": 2,
        "classification": "third",
        "user_id": 5,
        "points": 15
    },
    {
        "game_number": 2,
        "classification": "fourth",
        "user_id": 8,
        "points": 12
    },
    {
        "game_number": 2,
        "classification": "fifth",
        "user_id": 4,
        "points": 10
    },
    {
        "game_number": 2,
        "classification": "sixth",
        "user_id": 3,
        "points": 8
    },
    {
        "game_number": 2,
        "classification": "seventh",
        "user_id": 2,
        "points": 6
    },
    {
        "game_number": 2,
        "classification": "eighth",
        "user_id": 6,
        "points": 4
    },
    {
        "game_number": 2,
        "classification": "ninth",
        "user_id": 7,
        "points": 2
    },
    {
        "game_number": 2,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 3,
        "classification": "first",
        "user_id": 3,
        "points": 25
    },
    {

        "game_number": 3,
        "classification": "second",
        "user_id": 1,
        "points": 18
    },
    {
        "game_number": 3,
        "classification": "third",
        "user_id": 5,
        "points": 15
    },
    {
        "game_number": 3,
        "classification": "fourth",
        "user_id": 11,
        "points": 12
    },
    {
        "game_number": 3,
        "classification": "fifth",
        "user_id": 8,
        "points": 10
    },
    {
        "game_number": 3,
        "classification": "sixth",
        "user_id": 9,
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
        "user_id": 4,
        "points": 4
    },
    {
        "game_number": 3,
        "classification": "ninth",
        "user_id": 7,
        "points": 2
    },
    {
        "game_number": 3,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 4,
        "classification": "first",
        "user_id": 3,
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
        "user_id": 1,
        "points": 15
    },
    {
        "game_number": 4,
        "classification": "fourth",
        "user_id": 4,
        "points": 12
    },
    {
        "game_number": 4,
        "classification": "fifth",
        "user_id": 2,
        "points": 10
    },
    {
        "game_number": 4,
        "classification": "sixth",
        "user_id": 11,
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
        "user_id": 9,
        "points": 4
    },
    {
        "game_number": 4,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 4,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 5,
        "classification": "first",
        "user_id": 1,
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
        "user_id": 6,
        "points": 12
    },
    {
        "game_number": 5,
        "classification": "fifth",
        "user_id": 9,
        "points": 10
    },
    {
        "game_number": 5,
        "classification": "sixth",
        "user_id": 3,
        "points": 8
    },
    {
        "game_number": 5,
        "classification": "seventh",
        "user_id": 4,
        "points": 6
    },
    {
        "game_number": 5,
        "classification": "eighth",
        "user_id": 7,
        "points": 4
    },
    {
        "game_number": 5,
        "classification": "ninth",
        "user_id": 11,
        "points": 2
    },
    {
        "game_number": 5,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 6,
        "classification": "first",
        "user_id": 1,
        "points": 25
    },
    {

        "game_number": 6,
        "classification": "second",
        "user_id": 2,
        "points": 18
    },
    {
        "game_number": 6,
        "classification": "third",
        "user_id": 7,
        "points": 15
    },
    {
        "game_number": 6,
        "classification": "fourth",
        "user_id": 10,
        "points": 12
    },
    {
        "game_number": 6,
        "classification": "fifth",
        "user_id": 4,
        "points": 10
    },
    {
        "game_number": 6,
        "classification": "sixth",
        "user_id": 6,
        "points": 8
    },
    {
        "game_number": 6,
        "classification": "seventh",
        "user_id": 11,
        "points": 6
    },
    {
        "game_number": 6,
        "classification": "eighth",
        "user_id": 9,
        "points": 4
    },
    {
        "game_number": 6,
        "classification": "ninth",
        "user_id": 8,
        "points": 2
    },
    {
        "game_number": 6,
        "classification": "tenth",
        "user_id": 3,
        "points": 1
    },
    {
        "game_number": 7,
        "classification": "first",
        "user_id": 2,
        "points": 25
    },
    {

        "game_number": 7,
        "classification": "second",
        "user_id": 4,
        "points": 18
    },
    {
        "game_number": 7,
        "classification": "third",
        "user_id": 7,
        "points": 15
    },
    {
        "game_number": 7,
        "classification": "fourth",
        "user_id": 1,
        "points": 12
    },
    {
        "game_number": 7,
        "classification": "fifth",
        "user_id": 6,
        "points": 10
    },
    {
        "game_number": 7,
        "classification": "sixth",
        "user_id": 10,
        "points": 8
    },
    {
        "game_number": 7,
        "classification": "seventh",
        "user_id": 8,
        "points": 6
    },
    {
        "game_number": 7,
        "classification": "eighth",
        "user_id": 9,
        "points": 4
    },
    {
        "game_number": 7,
        "classification": "ninth",
        "user_id": 5,
        "points": 2
    },
    {
        "game_number": 7,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    /* **************************************** */
    /* ****** RESULTADOS DA TEMPORADA 21 ****** */
    /* **************************************** */
    {
        "game_number": 8,
        "classification": "first",
        "user_id": 3,
        "points": 25
    },
    {

        "game_number": 8,
        "classification": "second",
        "user_id": 10,
        "points": 18
    },
    {
        "game_number": 8,
        "classification": "third",
        "user_id": 6,
        "points": 15
    },
    {
        "game_number": 8,
        "classification": "fourth",
        "user_id": 1,
        "points": 12
    },
    {
        "game_number": 8,
        "classification": "fifth",
        "user_id": 4,
        "points": 10
    },
    {
        "game_number": 8,
        "classification": "sixth",
        "user_id": 8,
        "points": 8
    },
    {
        "game_number": 8,
        "classification": "seventh",
        "user_id": 7,
        "points": 6
    },
    {
        "game_number": 8,
        "classification": "eighth",
        "user_id": 2,
        "points": 4
    },
    {
        "game_number": 8,
        "classification": "ninth",
        "user_id": 11,
        "points": 2
    },
    {
        "game_number": 8,
        "classification": "tenth",
        "user_id": 5,
        "points": 1
    },
    {
        "game_number": 9,
        "classification": "first",
        "user_id": 4,
        "points": 25
    },
    {

        "game_number": 9,
        "classification": "second",
        "user_id": 3,
        "points": 18
    },
    {
        "game_number": 9,
        "classification": "third",
        "user_id": 8,
        "points": 15
    },
    {
        "game_number": 9,
        "classification": "fourth",
        "user_id": 5,
        "points": 12
    },
    {
        "game_number": 9,
        "classification": "fifth",
        "user_id": 7,
        "points": 10
    },
    {
        "game_number": 9,
        "classification": "sixth",
        "user_id": 6,
        "points": 8
    },
    {
        "game_number": 9,
        "classification": "seventh",
        "user_id": 1,
        "points": 6
    },
    {
        "game_number": 9,
        "classification": "eighth",
        "user_id": 2,
        "points": 4
    },
    {
        "game_number": 9,
        "classification": "ninth",
        "user_id": 11,
        "points": 2
    },
    {
        "game_number": 9,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 10,
        "classification": "first",
        "user_id": 6,
        "points": 25
    },
    {

        "game_number": 10,
        "classification": "second",
        "user_id": 3,
        "points": 18
    },
    {
        "game_number": 10,
        "classification": "third",
        "user_id": 7,
        "points": 15
    },
    {
        "game_number": 10,
        "classification": "fourth",
        "user_id": 9,
        "points": 12
    },
    {
        "game_number": 10,
        "classification": "fifth",
        "user_id": 5,
        "points": 10
    },
    {
        "game_number": 10,
        "classification": "sixth",
        "user_id": 8,
        "points": 8
    },
    {
        "game_number": 10,
        "classification": "seventh",
        "user_id": 2,
        "points": 6
    },
    {
        "game_number": 10,
        "classification": "eighth",
        "user_id": 11,
        "points": 4
    },
    {
        "game_number": 10,
        "classification": "ninth",
        "user_id": 1,
        "points": 2
    },
    {
        "game_number": 10,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 11,
        "classification": "first",
        "user_id": 3,
        "points": 25
    },
    {

        "game_number": 11,
        "classification": "second",
        "user_id": 1,
        "points": 18
    },
    {
        "game_number": 11,
        "classification": "third",
        "user_id": 5,
        "points": 15
    },
    {
        "game_number": 11,
        "classification": "fourth",
        "user_id": 2,
        "points": 12
    },
    {
        "game_number": 11,
        "classification": "fifth",
        "user_id": 7,
        "points": 10
    },
    {
        "game_number": 11,
        "classification": "sixth",
        "user_id": 8,
        "points": 8
    },
    {
        "game_number": 11,
        "classification": "seventh",
        "user_id": 6,
        "points": 6
    },
    {
        "game_number": 11,
        "classification": "eighth",
        "user_id": 11,
        "points": 4
    },
    {
        "game_number": 11,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 11,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 12,
        "classification": "first",
        "user_id": 5,
        "points": 25
    },
    {

        "game_number": 12,
        "classification": "second",
        "user_id": 1,
        "points": 18
    },
    {
        "game_number": 12,
        "classification": "third",
        "user_id": 6,
        "points": 15
    },
    {
        "game_number": 12,
        "classification": "fourth",
        "user_id": 3,
        "points": 12
    },
    {
        "game_number": 12,
        "classification": "fifth",
        "user_id": 9,
        "points": 10
    },
    {
        "game_number": 12,
        "classification": "sixth",
        "user_id": 7,
        "points": 8
    },
    {
        "game_number": 12,
        "classification": "seventh",
        "user_id": 8,
        "points": 6
    },
    {
        "game_number": 12,
        "classification": "eighth",
        "user_id": 4,
        "points": 4
    },
    {
        "game_number": 12,
        "classification": "ninth",
        "user_id": 11,
        "points": 2
    },
    {
        "game_number": 12,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 13,
        "classification": "first",
        "user_id": 1,
        "points": 25
    },
    {

        "game_number": 13,
        "classification": "second",
        "user_id": 6,
        "points": 18
    },
    {
        "game_number": 13,
        "classification": "third",
        "user_id": 9,
        "points": 15
    },
    {
        "game_number": 13,
        "classification": "fourth",
        "user_id": 8,
        "points": 12
    },
    {
        "game_number": 13,
        "classification": "fifth",
        "user_id": 7,
        "points": 10
    },
    {
        "game_number": 13,
        "classification": "sixth",
        "user_id": 11,
        "points": 8
    },
    {
        "game_number": 13,
        "classification": "seventh",
        "user_id": 3,
        "points": 6
    },
    {
        "game_number": 13,
        "classification": "eighth",
        "user_id": 5,
        "points": 4
    },
    {
        "game_number": 13,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 13,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 14,
        "classification": "first",
        "user_id": 1,
        "points": 25
    },
    {

        "game_number": 14,
        "classification": "second",
        "user_id": 7,
        "points": 18
    },
    {
        "game_number": 14,
        "classification": "third",
        "user_id": 9,
        "points": 15
    },
    {
        "game_number": 14,
        "classification": "fourth",
        "user_id": 5,
        "points": 12
    },
    {
        "game_number": 14,
        "classification": "fifth",
        "user_id": 4,
        "points": 10
    },
    {
        "game_number": 14,
        "classification": "sixth",
        "user_id": 11,
        "points": 8
    },
    {
        "game_number": 14,
        "classification": "seventh",
        "user_id": 3,
        "points": 6
    },
    {
        "game_number": 14,
        "classification": "eighth",
        "user_id": 6,
        "points": 4
    },
    {
        "game_number": 14,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 14,
        "classification": "none",
        "user_id": 12,
        "points": 0
    },
    {
        "game_number": 15,
        "classification": "first",
        "user_id": 3,
        "points": 25
    },
    {

        "game_number": 15,
        "classification": "second",
        "user_id": 4,
        "points": 18
    },
    {
        "game_number": 15,
        "classification": "third",
        "user_id": 5,
        "points": 15
    },
    {
        "game_number": 15,
        "classification": "fourth",
        "user_id": 9,
        "points": 12
    },
    {
        "game_number": 15,
        "classification": "fifth",
        "user_id": 6,
        "points": 10
    },
    {
        "game_number": 15,
        "classification": "sixth",
        "user_id": 1,
        "points": 8
    },
    {
        "game_number": 15,
        "classification": "seventh",
        "user_id": 8,
        "points": 6
    },
    {
        "game_number": 15,
        "classification": "eighth",
        "user_id": 2,
        "points": 4
    },
    {
        "game_number": 15,
        "classification": "ninth",
        "user_id": 7,
        "points": 2
    },
    {
        "game_number": 15,
        "classification": "tenth",
        "user_id": 11,
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