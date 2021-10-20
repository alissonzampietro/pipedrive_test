import Koa from 'koa';
import Router from 'koa-router';

export const app = new Koa();

const router = new Router();

app.use(router.routes());

router
  .get('/', (ctx) => {
    ctx.body = 'It\'s working';
  })
  .post('/organizations', ctx => {
      ctx.body = ['alisson', 'zampietro'];
      ctx.status = 200;
  });
