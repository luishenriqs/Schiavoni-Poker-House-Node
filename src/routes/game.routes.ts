import { Router } from "express";
import { CreatedFirstController } from '../modules/games/useCases/createdFirst/CreatedFirstController';
import { CreateGameController } from "../modules/games/useCases/createGames/CreateGameController";
import { ListGamesController } from '../modules/games/useCases/listGames/ListGamesController';
import { NextGameNumberController } from '../modules/games/useCases/nextGameNumber/NextGameNumberController';
import { FindByGameNumberController } from '../modules/games/useCases/findByGameNumber/FindByGameNumberController';
import { FindByIdController } from '../modules/games/useCases/findByUserId/FindByIdController';
import { LastEightGamesController } from '../modules/games/useCases/lastEight/LastEightGamesController';
import { LastEightPerUserController } from '../modules/games/useCases/lastEightPerUser/LastEightPerUserController';
import { UserStatsController } from '../modules/games/useCases/userStats/UserStatsController';
import { DeleteGamesController } from '../modules/games/useCases/deleteGames/DeleteGamesController';

const gameRoutes = Router();

const createdFirstController = new CreatedFirstController();
const createGameController = new CreateGameController();
const listGamesController = new ListGamesController();
const nextGameNumberController = new NextGameNumberController();
const findByGameNumberController = new FindByGameNumberController();
const findByIdController = new FindByIdController();
const lastEightGamesController = new LastEightGamesController();
const lastEightPerUserController = new LastEightPerUserController();
const userStatsController = new UserStatsController();
const deleteGamesController = new DeleteGamesController();

gameRoutes.post("/createdfirst", createdFirstController.handle);
gameRoutes.post("/", createGameController.handle);
gameRoutes.get("/list", listGamesController.handle);
gameRoutes.get("/nextgame", nextGameNumberController.handle);
gameRoutes.get("/findbynumber", findByGameNumberController.handle);
gameRoutes.get("/findbyuserid", findByIdController.handle);
gameRoutes.get("/lasteight", lastEightGamesController.handle);
gameRoutes.get("/lasteightperuser", lastEightPerUserController.handle);
gameRoutes.get("/userstats", userStatsController.handle);
gameRoutes.delete("/delete", deleteGamesController.handle);

export { gameRoutes };