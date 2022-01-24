import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListOnlyActiveUseCase } from './ListOnlyActiveUseCase';

class ListOnlyActiveController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listOnlyActiveUseCase = container.resolve(ListOnlyActiveUseCase);
        const onlyActive = await listOnlyActiveUseCase.execute();
        return response.json(onlyActive);
    };
};

export { ListOnlyActiveController };