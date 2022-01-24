import { getRepository, Repository } from 'typeorm';
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

        await this.repository.save(user);
        return user;
    };

    async list(): Promise<User[]> {
        const user = await this.repository.find();
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
};

export { UserRepository };