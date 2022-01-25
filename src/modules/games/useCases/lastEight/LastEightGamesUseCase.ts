import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { Game } from "../../entities/Games";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class LastEightGamesUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute(): Promise<Game[]> {
        const nextGameNumber = await this.gamesRepository.nextGameNumber();
        /* LÓGICA PARA BUSCAR ÚLTIMOS 8 JOGOS; */
        const lastValidGame = nextGameNumber - 8;

        const games = await this.gamesRepository.list();
        const eightGames = games.filter(game => game.game_number >= lastValidGame);
        return instanceToInstance(eightGames);
    }
};

export { LastEightGamesUseCase };