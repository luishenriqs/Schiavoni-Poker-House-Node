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
        user_name,
        points,
    }: IGamesDTO): Promise<void> {

        const game = this.repository.create({
            game_number,
            classification,
            user_id,
            user_name,
            points,
        });

        await this.repository.save(game);
    };

    async nextGameNumber(): Promise<number> {
        const games = await this.repository.find();
        const numbers = games.map(game => {
            return game.game_number;
        });
        const biggest_game = Math.max(...numbers)
        const next_game = biggest_game + 1;
        return next_game;
    };

    async list(): Promise<Game[]> {
        const games = await this.repository.find();
        return games;
    };

    async findByGameNumber(game_number: number): Promise<Game[]> {
        const games = await this.repository.find({ game_number });
        return games;
    };

    async findByName(user_name: string): Promise<Game[]> {
        const games = await this.repository.find({ user_name });
        return games;
    };

    async findById(user_id: number): Promise<Game[]> {
        const games = await this.repository.find({ user_id });
        return games;
    };

    async delete(game_number: number): Promise<void> {
        const games = await this.repository.find({ game_number });
        if (!games) {
            throw new AppError('This game does not exist');
        }

        games.map(async game => {
            await this.repository.remove(game);
        });
        return;
    };
};

export { GamesRepository };

/* 
******************** PRÓXIMAS TASKS **************************

1 - MÉTODO DELETE FUNCIONA PORÉM REQUISIÇÃO NO INSOMNIA NÃO FINALIZA;
2 - IMPLEMENTAR MÉTODOS PUT E PATCH NOS DOIS MÓDULOS DA APLICAÇÃO;
3 - VERIFICAR MÉTODO AUTHENTICATE;
*/