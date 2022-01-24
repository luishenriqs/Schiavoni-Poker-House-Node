import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUsersUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};
    async execute(): Promise<User[]> {
        let users = await this.userRepository.list();
        return instanceToInstance(users);
    }
};

export { ListUsersUseCase };