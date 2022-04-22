import { dbConfig } from '../config/db.config';
import {  Dialect, Sequelize } from 'sequelize';


const dbName = dbConfig.DB;
const dbUser = dbConfig.USER;
const dbHost = dbConfig.HOST;
const dbPassword = dbConfig.PASSWORD;
const dbDialect = dbConfig.dialect as Dialect;

const sequelizeConnection: Sequelize  = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect
  // operatorsAliases: false,
  // pool: {
  //   max: dbConfig.pool.max,
  //   min: dbConfig.pool.min,
  //   acquire: dbConfig.pool.acquire,
  //   idle: dbConfig.pool.idle
  // }
});

export default sequelizeConnection; 