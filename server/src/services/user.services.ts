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
}