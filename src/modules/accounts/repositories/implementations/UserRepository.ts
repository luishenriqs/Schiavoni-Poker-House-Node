import { getRepository, Repository } from 'typeorm';
import { AppError } from '../../../../errors/AppError';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

class UserRepository implements IUserRepository {

    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User); 
    };

    async create({
        name,
        email,
        password,
        is_admin,
        is_active,
    }: ICreateUserDTO): Promise<User> {

        const user = this.repository.create({
            name,
            email,
            password,
            is_admin,
            is_active,
        });
        if (!user) {
            throw new AppError('There was an error, please try again later');
        };
        await this.repository.save(user);
        return user;
    };

    async list(): Promise<User[]> {
        const user = await this.repository.find();
        if (!user) {
            throw new AppError('No registered user found');
        };
        return user;
    };

    async listOnlyActive(): Promise<User[]> {
        const user = await this.repository.find(
            {
                where: {
                    is_active: true
                },
            }
        );
        if (!user) {
            throw new AppError('No active users found');
        };
        return user;
    };

    async findById(id: number): Promise<User | void> {
        const user = await this.repository.findOne( id );
        return user;
    };

    async findByName(name: string): Promise<User | void> {
        const user = await this.repository.findOne({ name });
        return user;
    };

    async findByEmail(email: string): Promise<User | void> {
        const user = await this.repository.findOne({ email });
        return user;
    };

    async delete(id: number): Promise<void> {
        const user = await this.repository.findOne( id );
        if (!user) {
            throw new AppError('This user does not exist');
        };
        await this.repository.remove(user);
        return;
    };

    async update(id: number, is_admin: boolean, is_active: boolean): Promise<User> {
        const user = await this.repository.findOne({ id });
        if (!user) {
            throw new AppError('This user does not exist');
        };
        user.is_admin = is_admin;
        user.is_active = is_active;
        await this.repository.save(user);
        return user;
    };
};

export { UserRepository };