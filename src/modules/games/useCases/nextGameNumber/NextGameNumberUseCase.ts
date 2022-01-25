import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class NextGameNumberUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute(): Promise<number> {
        const nextGameNumber = await this.gamesRepository.nextGameNumber();
        return nextGameNumber;
    }
};

export { NextGameNumberUseCase };