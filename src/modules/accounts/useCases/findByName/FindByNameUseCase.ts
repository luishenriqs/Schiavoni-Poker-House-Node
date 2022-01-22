import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class FindByNameUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};
    async execute({ name }): Promise<User | void> {
        let user = await this.userRepository.findByName(name);
        return user;
    }
};

export { FindByNameUseCase };