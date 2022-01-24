import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { Game } from "../../entities/Games";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class ListGamesUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute(): Promise<Game[]> {
        let games = await this.gamesRepository.list();
        return instanceToInstance(games);
    }
};

export { ListGamesUseCase };