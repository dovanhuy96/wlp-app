import { Request, Response } from 'express'
import { UserService } from '../services/user.services'


export class TodoController {
    public static async getAllTodo(req: Request, res: Response) {
        const userService = new UserService();

        const result = await userService.getAll()

        return res.json( result)
    }
}