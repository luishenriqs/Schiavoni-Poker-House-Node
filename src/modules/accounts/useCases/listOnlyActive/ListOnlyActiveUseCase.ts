import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ListOnlyActiveUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};
    async execute(): Promise<User[]> {
        let onlyActive = await this.userRepository.listOnlyActive();
        return instanceToInstance(onlyActive);
    }
};

export { ListOnlyActiveUseCase };