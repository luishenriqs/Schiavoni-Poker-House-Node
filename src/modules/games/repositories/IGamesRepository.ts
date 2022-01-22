import { Game } from '../entities/Games';
import { IGamesDTO } from '../dtos/IGamesDTO';

interface IGamesRepository {
    create({
        id,
        game_number,
        classification,
        user_id,
        user_name,
        points,
    }: IGamesDTO): Promise<Game | void>;

    list(): Promise<Game[]>;

    findById(id: number): Promise<Game | void>;

    delete(id: number): Promise<void>;
};

export { IGamesRepository };