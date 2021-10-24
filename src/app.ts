require('dotenv').config()
import Koa from 'koa';
import KoaLogger from 'koa-logger';
import allRoutes from './routes';
export const app = new Koa();

app.use(KoaLogger());
app.use(allRoutes());