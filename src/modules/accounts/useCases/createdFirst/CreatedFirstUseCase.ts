import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { instanceToInstance } from 'class-transformer';
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from "../../entities/User";

@injectable()
class CreatedFirstUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository,
    ) {};

    async execute({
        name,
        email,
        password,
        is_admin = false,
        is_active = true,
    }: ICreateUserDTO): Promise<User | void> {

        const emailAlredyExists = await this.userRepository.findByName(name);
        
        if(emailAlredyExists) {
            return;
        };

        const passwordHash = await hash(password, 8);

        const user = await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            is_admin,
            is_active,
        });

        return instanceToInstance(user);
    };
};

export { CreatedFirstUseCase };