import { Router } from "express";
import { CreatedFirstController } from "../modules/accounts/useCases/createdFirst/CreatedFirstController";
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController";
import { ListOnlyActiveController } from '../modules/accounts/useCases/listOnlyActive/ListOnlyActiveController';
import { FindByNameController } from "../modules/accounts/useCases/findByName/FindByNameController";
import { FindByIdController } from "../modules/accounts/useCases/findById/FindByIdController";
import { FindByEmailController } from "../modules/accounts/useCases/findByEmail/FindByEmailController";
import { DeleteUserController } from '../modules/accounts/useCases/deleteUser/DeleteUserController';
import { UpDateUserController } from '../modules/accounts/useCases/up_date/UpDateUserController';

const userRoutes = Router();

const createdFirstController = new CreatedFirstController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const listUsersController = new ListUsersController();
const listOnlyActiveController = new ListOnlyActiveController();
const findByNameController = new FindByNameController();
const findByIdController = new FindByIdController();
const findByEmailController = new FindByEmailController();
const deleteUserController = new DeleteUserController();
const upDateUserController = new UpDateUserController();

userRoutes.post("/", createdFirstController.handle);
userRoutes.post("/create", createUserController.handle);
userRoutes.post("/login", authenticateUserController.handle);
userRoutes.get("/list", listUsersController.handle);
userRoutes.get("/onlyactive", listOnlyActiveController.handle);
userRoutes.get("/findbyname", findByNameController.handle);
userRoutes.get("/findbyid", findByIdController.handle);
userRoutes.get("/findbyemail", findByEmailController.handle);
userRoutes.delete("/delete", deleteUserController.handle);
userRoutes.patch("/update", upDateUserController.handle);

export { userRoutes };