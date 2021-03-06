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
        game_number,
        classification,
        user_id,
        points,
    }: IGamesDTO): Promise<Game | void> {

        const game = this.repository.create({
            game_number,
            classification,
            user_id,
            points,
        });
        if (!game) {
            throw new AppError('There was an error, please try again later');
        };
        await this.repository.save(game);
        return game;
    };

    async nextGameNumber(): Promise<number> {
        const games = await this.repository.find();
        if (games.length === 0) {
            const next_game = 1;
            return next_game;
        };
        const numbers = games.map(game => {
            return game.game_number;
        });
        const biggest_game = Math.max(...numbers)
        const next_game = biggest_game + 1;
        return next_game;
    };

    async list(): Promise<Game[]> {
        const games = await this.repository.find();
        if (!games) {
            throw new AppError('There are no matches registered');
        };
        return games;
    };

    async findByGameNumber(game_number: number): Promise<Game[]> {
        const games = await this.repository.find({ game_number });
        return games;
    };

    async findById(user_id: number): Promise<Game[]> {
        const games = await this.repository.find({
            where: {
                user_id
            },
            relations: ["userId"],
        });
        return games;
    };

    async findClassification(games: Game[]): Promise<string[]> {

        const classifications = games.map(game => {
            return game.classification
        });

        return classifications;
    };

    async findPoints(games: Game[]): Promise<number[]> {

        const points = games.map(game => {
            return game.points
        });

        return points;
    };


    async delete(game_number: number): Promise<void> {
        const games = await this.repository.find({ game_number });
        if (!games) {
            throw new AppError('This game does not exist');
        };
        games.map(async game => {
            await this.repository.remove(game);
        });
        return;
    };
};

export { GamesRepository };
