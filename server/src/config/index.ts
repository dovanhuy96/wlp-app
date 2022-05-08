/**
 *        @file index.ts
 * @application wlp-app
 *     @summary all config of the application
 */


import { PoolConfig } from "mysql";

export const dbConfig: PoolConfig = {
	host: process.env.MY_SQL_DB_HOST || '127.0.0.1',
	user: process.env.MY_SQL_DB_USER || 'root',
	password: process.env.MY_SQL_DB_PASSWORD || 'dovanhuy1996',
	database: process.env.MY_SQL_DB_DATABASE || 'wlp_app',
	connectionLimit: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 4,
	insecureAuth: true
};

/**
 * Server Configuration
 * Configurable server object required by the API include settings for the server port (port), a UUID
 * used to encode the authorization token (apiUuid), and the duration of that token (tokenExpiration).
 */
 export const server = {
	port: 9001,
	apiUuid: '0eb14adc-a16e-400c-8f55-7d6c016bb36d',
	tokenExpiration: {
		days: 1,
		hours: 8,
		minutes: 0,
		seconds: 0,
	}
}