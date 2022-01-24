import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByNameUseCase } from './FindByNameUseCase';

class FindByNameController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_name } = request.query;
        const findByNameUseCase = container.resolve(FindByNameUseCase);
        const games = await findByNameUseCase.execute({ user_name });
        return response.json(games);
    };
};

export { FindByNameController };