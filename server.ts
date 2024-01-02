import express, {Express, Request, Response} from 'express'
import { APP_CONFIG } from './config'

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
	return res.send('<h1 style="font-size: 10rem">Chipi Chipi Chapa Chapa<h1>')
})

app.listen(APP_CONFIG.port, () => {
	console.log(`[SERVER INITIALIZED] Server up and running at ${APP_CONFIG.host}:${APP_CONFIG.port}, secret_msg: ${APP_CONFIG.example_variable}`)
})