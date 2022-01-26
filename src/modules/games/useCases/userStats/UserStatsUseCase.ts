import "reflect-metadata"
import { inject, injectable } from 'tsyringe';
import { IGamesRepository } from "../../repositories/IGamesRepository";

type IResponse = {
    allGames_first: number;
    allGames_second: number;
    allGames_third: number;
    allGames_points: number;
    eightGames_first: number;
    eightGames_second: number;
    eightGames_third: number;
    eightGames_points: number;
  };

@injectable()
class UserStatsUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository,
    ) {};
    async execute({ user_id }): Promise<IResponse> {

        //*** Função para soma de pontos */
        const reducer = (a: number, b: number) => a + b;

        //*** Lógica para buscar últimos 8 jogos ***
        const nextGameNumber = await this.gamesRepository.nextGameNumber();
        const lastValidGame = nextGameNumber - 8;


        //*** TODOS OS JOGOS ***/
        const allGames = await this.gamesRepository.findById(user_id);

        //*** Todas as classificações */
        const allClassification = await this.gamesRepository.findClassification(allGames);
        
        //*** Quantidade de vezes em primeiro, segundo e terceiro lugares */
        const allFirst = allClassification.filter(() => "first");
        const allSecond = allClassification.filter(() => "second");
        const allThird = allClassification.filter(() => "third");

        //*** Pontos de todos os jogos disputados */
        const allPoints = await this.gamesRepository.findPoints(allGames);

        //*** Soma de todos os pontos conquistados */
        const totalPoints = allPoints.reduce(reducer);



        //*** ÚLTIMOS 8 JOGOS ***/
        const eightGames = allGames.filter(game => game.game_number >= lastValidGame);

        //*** Últimas 8 classificações */
        const eightClassification = await this.gamesRepository.findClassification(eightGames);

        //*** Quantidade de vezes em primeiro, segundo e terceiro lugares */
        const eightFirst = eightClassification.filter(() => "first");
        const eightSecond = eightClassification.filter(() => "second");
        const eightThird = eightClassification.filter(() => "third");

        //*** Pontos dos últimos 8 jogos */
        const points = await this.gamesRepository.findPoints(eightGames);

        //*** Soma dos pontos dos últimos 8 jogos */
        const eightPoints = points.reduce(reducer);


        return {
            allGames_first: allFirst.length,
            allGames_second: allSecond.length,
            allGames_third: allThird.length,
            allGames_points: totalPoints,
            eightGames_first: eightFirst.length,
            eightGames_second: eightSecond.length,
            eightGames_third: eightThird.length,
            eightGames_points: eightPoints,
        };
    };
};

export { UserStatsUseCase };
