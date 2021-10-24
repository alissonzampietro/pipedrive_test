require('dotenv').config()
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import KoaLogger from 'koa-logger';
import allRoutes from './routes';
export const app = new Koa();

app.use(bodyParser())
app.use(KoaLogger());
app.use(allRoutes());