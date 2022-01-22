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
            id,
            game_number,
            classification,
            user_id,
            user_name,
            points,
        }: IGamesDTO): Promise<Game | void> {

        const game = await this.gamesRepository.create({
            id,
            game_number,
            classification,
            user_id,
            user_name,
            points,
        })

        return game;
    };
};

export { CreateGameUseCase };