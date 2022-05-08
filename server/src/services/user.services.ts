import { uuid } from "uuidv4"
import { Todo } from "../constants/message"
import Helper from "../db_pool/helper"

export class UserService {


    public async getAll(): Promise<any> {
        const sql = `SELECT *
			FROM todos_table`

        const pool = Helper.pool()
        const query_results = await pool.executeSQl<any>(sql, [])
        return {
            success: true,
            data: query_results,
        }
    }

    public async addTodo (todo: any): Promise<any> {
        try {
            const pool = Helper.pool()
            if (!todo?.name) {
                return { success: false, data: { message: Todo.EMPTY_NAME} }
            }
            // insert user row
            const sqlCheckDuplidate = `SELECT * FROM todos_table WHERE name='${todo.name}'`
            const sqlTodo = `INSERT INTO todos_table (id, name, isActive, isDone, priority) VALUES ('${uuid()}', '${todo.name}', '${todo.isActive}', '${todo.isDone}', '${todo.priority}')`
            await pool.executeSQl(sqlTodo, [])
            
            return {
                success: true,
                    data: {
                    message: Todo.ADD_SUCCESS,
                },
            }
        } catch (error: any) {
            return { success: false, data: { message: error.detail || error } }
        }
    }
}