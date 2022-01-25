import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class UpDateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};
    async execute({ id, is_admin, is_active }): Promise<User> {
        const user = await this.userRepository.update(id, is_admin, is_active);
        return instanceToInstance(user);
    }
};

export { UpDateUserUseCase };