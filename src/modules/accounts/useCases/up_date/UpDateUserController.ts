import { Request, Response } from "express";
import { container } from 'tsyringe';
import { UpDateUserUseCase } from './UpDateUserUseCase';

class UpDateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, is_admin, is_active } = request.body;
        const upDateUserUseCase = container.resolve(UpDateUserUseCase);
        const user = await upDateUserUseCase.execute({ id, is_admin, is_active });
        return response.json(user);
    };
};

export { UpDateUserController };