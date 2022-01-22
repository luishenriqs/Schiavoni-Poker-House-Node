import { getRepository, Repository } from 'typeorm';
import { AppError } from '../../../../errors/AppError';
import { Game } from '../../entities/Games';
import { IGamesRepository } from '../IGamesRepository';
import { IGamesDTO } from '../../dtos/IGamesDTO';

class GamesRepository implements IGamesRepository {

    private repository: Repository<Game>;

    constructor() {
        this.repository = getRepository(Game); 
    };

    async create({
        id,
        game_number,
        classification,
        user_id,
        user_name,
        points,
    }: IGamesDTO): Promise<Game | void> {

        const game = this.repository.create({
            id,
            game_number,
            classification,
            user_id,
            user_name,
            points,
        });

        await this.repository.save(game);
        return game;
    }

    async list(): Promise<Game[]> {
        const games = await this.repository.find();
        return games;
    }

    async findById(id: number): Promise<Game | void> {
        const game = await this.repository.findOne({ id });
        return game;
    }

    async delete(id: number): Promise<void> {
        const game = await this.repository.find({ id });
        if (!game) {
            throw new AppError('This game does not exist');
        }
        await this.repository.remove(game);
    }
};

export { GamesRepository };