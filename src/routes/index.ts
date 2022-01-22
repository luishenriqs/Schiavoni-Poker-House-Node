import { Router } from 'express';
import { userRoutes } from '../routes/user.routes';
import { gameRoutes } from '../routes/game.routes';

const router = Router();

router.use("/user", userRoutes);
router.use("/game", gameRoutes);

export { router };