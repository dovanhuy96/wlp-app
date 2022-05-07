import { createPool, Pool } from 'mysql'

export default class MySQLPool {
    pool: Pool

    constructor(db: any) {
        this.pool = createPool({
            connectionLimit: db.DB_CONNECTION_LIMIT,
            host: db.DB_HOST,
            user: db.DB_USER,
            password: db.DB_PASSWORD,
            database: db.DB_DATABASE,
            insecureAuth : true
        })
            this.pool.on('error', function (err: Error, _client: any) {
            console.log(`Idle-Client Error:\n${err.message}\n${err.stack}`)
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
