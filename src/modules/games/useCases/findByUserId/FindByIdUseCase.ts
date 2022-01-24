import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { Game } from "../../entities/Games";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindByIdUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute({ user_id }): Promise<Game[]> {
        let games = await this.gamesRepository.findById(user_id);
        return instanceToInstance(games);
    }
};

export { FindByIdUseCase };