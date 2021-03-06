import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { IGamesRepository } from "../../repositories/IGamesRepository";
import { IGamesDTO } from '../../dtos/IGamesDTO';

@injectable()
class CreateGameUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
        async execute({
            game_number,
            classification,
            user_id,
            points,
        }: IGamesDTO): Promise<void> {

        await this.gamesRepository.create({
            game_number,
            classification,
            user_id,
            points,
        });
    };
};

export { CreateGameUseCase };