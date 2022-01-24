import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindByIdUseCase } from './FindByIdUseCase';

class FindByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id } = request.query;
        const findByIdUseCase = container.resolve(FindByIdUseCase);
        const games = await findByIdUseCase.execute({ user_id });
        return response.json(games);
    };
};

export { FindByIdController };