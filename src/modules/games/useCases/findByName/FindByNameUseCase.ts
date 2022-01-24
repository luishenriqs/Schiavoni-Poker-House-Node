import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { Game } from "../../entities/Games";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindByNameUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute({ user_name }): Promise<Game[]> {
        let games = await this.gamesRepository.findByName(user_name);
        return instanceToInstance(games);
    }
};

export { FindByNameUseCase };