import Router from "koa-router";

const router = new Router();

router.get('/', ctx => {
    ctx.body = 'It\'s working';
})

export default router;