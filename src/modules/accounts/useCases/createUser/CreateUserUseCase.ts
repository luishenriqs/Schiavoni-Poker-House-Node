import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { instanceToInstance } from 'class-transformer';
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { AppError } from '../../../../errors/AppError';
import { User } from "../../entities/User";

@injectable()
class CreateUserUseCase {
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

        const passwordHash = await hash(password, 8);

        const emailAlredyExists = await this.userRepository.findByName(name);

        if(emailAlredyExists) {
            throw new AppError("user`s email alredy exists!")
        }

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

export { CreateUserUseCase };