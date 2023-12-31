import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
	return res.send('<h1 style="font-size: 10rem;">Chipi Chipi Chapa Chapa<h1>');
})

const PORT = process.env.PORT || 8080;
const HOST = process.env.host || 'http://localhost';

app.listen(PORT, () => {
	console.log(`[server] Server up and running at ${HOST}:${PORT}`);
})