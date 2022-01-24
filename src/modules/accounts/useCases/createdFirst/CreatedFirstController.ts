import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatedFirstUseCase } from './CreatedFirstUseCase';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';


const first_users: ICreateUserDTO[] = [
    {
        "name": "Dú Schiavoni",
        "email": "du@gmail.com",
        "password": "123456",
        "is_admin": true,
        "is_active": true
    },
    {
        "name": "Leandro",
        "email": "leandro@gmail.com",
        "password": "123456",
        "is_admin": true,
        "is_active": true
    },
    {
        "name": "Luisão",
        "email": "luisao@gmail.com",
        "password": "123456",
        "is_admin": true,
        "is_active": true
    },
    {
        "name": "Rodrigão",
        "email": "potão@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": false
    },
    {
        "name": "Léo Resende",
        "email": "leoEsmalte@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": false
    },
    {
        "name": "Bruno",
        "email": "brunoRodrigues@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": false
    },
    {
        "name": "Carlos",
        "email": "carlosRodrigues@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": false
    },
    {
        "name": "Diego",
        "email": "diego@gmail.com",
        "password": "123456",
        "is_admin": true,
        "is_active": true
    },
    {
        "name": "Filipi",
        "email": "filipi@gmail.com",
        "password": "123456",
        "is_admin": true,
        "is_active": true
    },
    {
        "name": "Roger",
        "email": "roger@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": true
    },
    {
        "name": "Rochinha",
        "email": "cassiano@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": false
    },
    {
        "name": "Paulinho",
        "email": "paulinho@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": true
    },
    {
        "name": "Dr. Bó",
        "email": "bo@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": true
    },
    {
        "name": "Márcio",
        "email": "marcio@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": true
    },
    {
        "name": "Léo Criado",
        "email": "leoCriado@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": true
    },
    {
        "name": "Ednelson",
        "email": "ednelson@gmail.com",
        "password": "123456",
        "is_admin": false,
        "is_active": true
    }
];

class CreatedFirstController {
    async handle(request: Request, response: Response): Promise<Response> {
       
        const createdFirstUseCase = container.resolve(CreatedFirstUseCase);
        
        let players = first_users.map(async item => {
    
           await createdFirstUseCase.execute(item);
        });
        
        return response.status(201).json(players);
    };
};

export { CreatedFirstController };