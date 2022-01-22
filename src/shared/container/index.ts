import { container } from 'tsyringe';
import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/accounts/repositories/IUserRepository';
import { GamesRepository } from '../../modules/games/repositories/implementations/GamesRepository';
import { IGamesRepository } from '../../modules/games/repositories/IGamesRepository';

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);

container.registerSingleton<IGamesRepository>(
    "GamesRepository",
    GamesRepository
);
