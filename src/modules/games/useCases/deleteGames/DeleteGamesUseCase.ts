import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { Game } from "../../entities/Games";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class DeleteGamesUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute({ game_number }): Promise<void> {
        await this.gamesRepository.delete(game_number);
        return;
    }
};

export { DeleteGamesUseCase };