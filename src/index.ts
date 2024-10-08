import express, { Express, Request, Response } from 'express';
import { AppDataSource } from './datasource';

const app: Express = express();
const port = 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Typescript + Node.js + Express Server');
});

AppDataSource.initialize()
  .then(() => console.log('Successfully connected database'))
  .catch((e) => console.log(`An error occured when connecting database: ${e.stack}`));

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});