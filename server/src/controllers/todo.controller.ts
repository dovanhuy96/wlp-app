import { Request, Response } from 'express'
import { ResponseWrapper } from '../providers/response_wrapper';
import { UserService } from '../services/user.services'


export class TodoController {
    // public userService;
    // constructor() {
    //     this.userService = new UserService()
    // }
    public static async getAllTodo(req: Request, res: Response) {
        const userService = new UserService();
        const response: ResponseWrapper = new ResponseWrapper(res)
        const result = await userService.getAll()

        return response.ok(result)
    }

    public static async createTodo(req: Request, res: Response) {
        const userService = new UserService();
        const result = await userService.addTodo(req.body);
        const response: ResponseWrapper = new ResponseWrapper(res)
        return response.created(result)
    }
}