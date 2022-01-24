import { Router } from "express";
import { CreateGameController } from "../modules/games/useCases/createGames/CreateGameController";
import { ListGamesController } from '../modules/games/useCases/listGames/ListGamesController';
import { NextGameNumberController } from '../modules/games/useCases/nextGameNumber/NextGameNumberController';
import { FindByGameNumberController } from '../modules/games/useCases/findByGameNumber/FindByGameNumberController';
import { FindByNameController } from '../modules/games/useCases/findByName/FindByNameController';
import { FindByIdController } from '../modules/games/useCases/findByUserId/FindByIdController';
import { DeleteGamesController } from '../modules/games/useCases/deleteGames/DeleteGamesController';

const gameRoutes = Router();

const createGameController = new CreateGameController();
const listGamesController = new ListGamesController();
const nextGameNumberController = new NextGameNumberController();
const findByGameNumberController = new FindByGameNumberController();
const findByNameController = new FindByNameController();
const findByIdController = new FindByIdController();
const deleteGamesController = new DeleteGamesController();

gameRoutes.post("/", createGameController.handle);
gameRoutes.get("/list", listGamesController.handle);
gameRoutes.get("/nextgame", nextGameNumberController.handle);
gameRoutes.get("/findbynumber", findByGameNumberController.handle);
gameRoutes.get("/findbyname", findByNameController.handle);
gameRoutes.get("/findbyuserid", findByIdController.handle);
gameRoutes.delete("/delete", deleteGamesController.handle);

export { gameRoutes };