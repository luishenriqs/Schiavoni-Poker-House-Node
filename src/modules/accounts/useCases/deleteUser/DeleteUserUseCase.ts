import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};
    async execute({ id }): Promise<void> {
        await this.userRepository.delete(id);
    };
};

export { DeleteUserUseCase };