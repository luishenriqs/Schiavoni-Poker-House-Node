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

    listOnlyActive(): Promise<User[]>;

    findById(id: number): Promise<User | void>;

    findByName(name: string): Promise<User | void>;

    findByEmail(email: string): Promise<User | void>;

    delete(id: number): Promise<void>;

    update(id: number, is_admin: boolean, is_active: boolean): Promise<User>;
};

export { IUserRepository };