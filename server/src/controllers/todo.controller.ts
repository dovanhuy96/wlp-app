import { Request, Response } from 'express'


export class TodoController {
    public static async getAllTodo(req: Request, res: Response) {
        return res.send('hello Huy');
    }
}