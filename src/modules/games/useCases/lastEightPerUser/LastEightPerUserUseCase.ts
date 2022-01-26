import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { Game } from "../../entities/Games";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class LastEightPerUserUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute({ user_id }): Promise<Game[]> {
        const nextGameNumber = await this.gamesRepository.nextGameNumber();
        //*** LÓGICA PARA BUSCAR ÚLTIMOS 8 JOGOS ***
        const lastValidGame = nextGameNumber - 8;

        let games = await this.gamesRepository.findById(user_id);
        const eightGames = games.filter(game => game.game_number >= lastValidGame);
        return instanceToInstance(eightGames);
    }
};

export { LastEightPerUserUseCase };