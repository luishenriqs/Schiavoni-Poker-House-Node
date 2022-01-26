import { Game } from '../entities/Games';
import { IGamesDTO } from '../dtos/IGamesDTO';

interface IGamesRepository {
    create({
        game_number,
        classification,
        user_id,
        points,
    }: IGamesDTO): Promise<Game | void>;

    nextGameNumber(): Promise<number>;

    list(): Promise<Game[]>;

    findByGameNumber(game_number: number): Promise<Game[]>;

    findById(user_id: number): Promise<Game[]>;

    findClassification(games: Game[]): Promise<string[]>;

    findPoints(games: Game[]): Promise<number[]>;

    delete(game_number: number): Promise<void>;
};

export { IGamesRepository };