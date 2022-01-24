import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class FindByEmailUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};
    async execute({ email }): Promise<User | void> {
        let user = await this.userRepository.findByEmail(email);
        return instanceToInstance(user);
    }
};

export { FindByEmailUseCase };