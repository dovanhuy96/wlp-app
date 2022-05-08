import { createPool, Pool, PoolConfig } from 'mysql'

export default class MySQLPool {
    pool: Pool

    constructor(db: PoolConfig) {
        this.pool = createPool({
            connectionLimit: db.connectionLimit,
            host: db.host,
            user: db.user,
            password: db.password,
            database: db.database,
            insecureAuth : db.insecureAuth
        })
    }

    public executeSQl<T>(query: string, params: string[] | Object): Promise<T> {
        try {
            if (!this.pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');
            return new Promise<T>((resolve, reject) => {
                this.pool.query(query, params, (error, results) => {
                    if (error) reject(error);
                    else resolve(results);
                });
            });

        } catch (error) {
            console.error('[mysql.connector][execute][Error]: ', error);
            throw new Error('failed to execute MySQL query');
        }
    }

}
