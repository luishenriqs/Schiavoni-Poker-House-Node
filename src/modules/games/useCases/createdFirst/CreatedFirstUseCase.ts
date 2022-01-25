import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { IGamesRepository } from "../../repositories/IGamesRepository";
import { IGamesDTO } from '../../dtos/IGamesDTO';
import { Game } from "../../entities/Games";

@injectable()
class CreatedFirstUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};

    async execute({
        game_number,
        classification,
        user_id,
        points,
    }: IGamesDTO): Promise<Game | void> {

        const games = await this.gamesRepository.create({
            game_number,
            classification,
            user_id,
            points,
        });

        return instanceToInstance(games);
    };
};

export { CreatedFirstUseCase };