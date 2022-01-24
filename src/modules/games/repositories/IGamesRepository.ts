import { Game } from '../entities/Games';
import { IGamesDTO } from '../dtos/IGamesDTO';

interface IGamesRepository {
    create({
        game_number,
        classification,
        user_id,
        user_name,
        points,
    }: IGamesDTO): Promise<void>;

    nextGameNumber(): Promise<number>;

    list(): Promise<Game[]>;

    findByGameNumber(game_number: number): Promise<Game[]>;

    findByName(user_name: string): Promise<Game[]>;

    findById(user_id: number): Promise<Game[]>;

    delete(game_number: number): Promise<void>;
};

export { IGamesRepository };