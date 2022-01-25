import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { NextGameNumberUseCase } from './NextGameNumberUseCase';

class NextGameNumberController {
    async handle(request: Request, response: Response): Promise<Response> {
        const nextGameNumberUseCase = container.resolve(NextGameNumberUseCase);
        const nextGameNumber = await nextGameNumberUseCase.execute();
        return response.json(nextGameNumber);
    };
};

export { NextGameNumberController };