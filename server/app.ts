/**
 *        @file app.ts
 * @application wlp-app
 *     @summary Starting point of the application
 * @description Handles the following middlwares:
 *              - CORS 
 *              - API routes
 *              - Auto Update Schema
 *              - Server
 */

import express from 'express';
import CORS from './src/providers/cors';
import * as config from './src/config';
import MySQLPool from './src/db_pool/mysql_pool'
import routes from './src/routes/index'

const app = express()

async function wlpApp() {

	app.use(CORS.handle)
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))


	app.use('/api/', routes)

	const pool = new MySQLPool(config.dbConfig)
	app.set('dbPool', pool)
	
	const port = config.server.port || 5002
	app.listen(port, () => {
		console.log(
			'\x1b[33m%s\x1b[0m',
			`Server :: Running @ 'http://localhost:${port}'`,
		)
	})
}

wlpApp();