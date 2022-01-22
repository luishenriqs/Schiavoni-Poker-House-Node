import { User } from '../entities/User';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUserRepository {
    create({
        name,
        email,
        password,
        is_admin,
        is_active,
    }: ICreateUserDTO): Promise<User>;

    list(): Promise<User[]>;

    findById(id: number): Promise<User | void>;

    findByName(name: string): Promise<User | void>;

    findByEmail(email: string): Promise<User | void>;
};

export { IUserRepository };