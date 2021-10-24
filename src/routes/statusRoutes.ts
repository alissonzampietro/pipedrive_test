import Router from "koa-router";

const router = new Router();

router.get('/', ctx => {
    ctx.body = 'It is working';
})

export default router;