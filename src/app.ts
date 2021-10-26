require('dotenv').config()
import Koa from 'koa';
import errorHandler from './middlewares/errorHandler';
import bodyParser from 'koa-bodyparser';
import KoaLogger from 'koa-logger';
import allRoutes from './routes';
export const app = new Koa();
app.use(errorHandler);
app.use(KoaLogger());
app.use(bodyParser());
app.use(allRoutes);