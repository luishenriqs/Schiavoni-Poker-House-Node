import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { IGamesRepository } from "../../repositories/IGamesRepository";
import { IGamesDTO } from '../../dtos/IGamesDTO';
import { Game } from "../../entities/Games";

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
            user_name,
            points,
        }: IGamesDTO): Promise<void> {

        await this.gamesRepository.create({
            game_number,
            classification,
            user_id,
            user_name,
            points,
        });
    };
};

export { CreateGameUseCase };