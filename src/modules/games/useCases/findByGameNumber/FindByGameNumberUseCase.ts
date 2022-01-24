import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { Game } from "../../entities/Games";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindByGameNumberUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute({ game_number }): Promise<Game[]> {
        let game = await this.gamesRepository.findByGameNumber(game_number);
        return instanceToInstance(game);
    }
};

export { FindByGameNumberUseCase };