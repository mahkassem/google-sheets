//  express app setup
import express, { urlencoded, json } from 'express';
import router from './routes';
import logger from './utils/logger';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(helmet());

app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors({
  origin: [
    '*', // allow all
    'http://localhost:3000', // allow specific origin
    'http://127.0.0.1:5500', // allow specific origin
    'https://moolapay.io'
  ],
}));

app.use(router);

app.listen(port, () => logger.info(`Server started on http://localhost:${port}`));


export default app;