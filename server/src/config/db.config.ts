
interface IdbConfig {
    HOST?: string;
    USER?: string;
    PASSWORD?: string;
    DB?: string;
    dialect?: string;
    pool: {
        max: number,
        min: number,
        acquire: number,
        idle: number
    }
}

export const dbConfig = {
    HOST: process.env.HOST ||'localhost',
    USER: process.env.USER || 'postgres',
    PASSWORD: process.env.PASSWORD ||'dovanhuy1996',
    DB: process.env.DB || 'wlp-database',
    dialect: process.env.dialect || 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}