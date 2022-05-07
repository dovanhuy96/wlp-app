interface IdbConfig {
	DB_HOST: number;
	DB_USER: string;
	DB_PASSWORD: string;
	DB_PORT: number;
	DB_DATABASE: string;
	DB_CONNECTION_LIMIT: number;
}


export const dbConfig = {
	DB_HOST: process.env.MY_SQL_DB_HOST,
	DB_USER: process.env.MY_SQL_DB_USER,
	DB_PASSWORD: process.env.MY_SQL_DB_PASSWORD,
	DB_PORT: process.env.MY_SQL_DB_PORT,
	DB_DATABASE: process.env.MY_SQL_DB_DATABASE,
	DB_CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 4,
};

/**
 * Server Configuration
 * Configurable server object required by the API include settings for the server port (port), a UUID
 * used to encode the authorization token (apiUuid), and the duration of that token (tokenExpiration).
 */
 export const server = {
	port: 9000,
	apiUuid: '0eb14adc-a16e-400c-8f55-7d6c016bb36d',
	tokenExpiration: {
		days: 1,
		hours: 8,
		minutes: 0,
		seconds: 0,
	}
}