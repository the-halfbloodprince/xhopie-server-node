import express, {Express, Request, Response} from 'express'
import { APP_CONFIG } from './config'
import initializeFeatures from './init/features'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
	return res.send(`
		<h1 style="font-size: 10rem">
			Chipi Chipi Chapa Chapa
		<h1>
	`)
})

initializeFeatures(app)

app.listen(APP_CONFIG.port, () => {
	console.log(`[SERVER] Server up and running at ${APP_CONFIG.host}:${APP_CONFIG.port}`)
})