import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    };
    
    const [, token] = authHeader.split(" ");  
    
    try {
        const { sub: user_id } = verify(token, "20d569feb58a21a4885797bde007d865") as IPayload;
        const userId = parseInt(user_id);

        const userRepository = new UserRepository();
        const user = userRepository.findById(userId);

        if (!user) {
            throw new AppError("User does not exist!", 401);
        };

        next();
    
    } catch {
        throw new AppError("Invalid token!", 401);
    };
};