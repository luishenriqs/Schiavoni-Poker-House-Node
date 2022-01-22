import { Router } from "express";
import { CreateGameController } from "../modules/games/useCases/createGames/CreateGameController";

const gameRoutes = Router();

const createGameController = new CreateGameController();

gameRoutes.post("/", createGameController.handle);

export { gameRoutes };