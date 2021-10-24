import Router from 'koa-router';
import * as organization from './../services/organization';
const router = new Router();

router.prefix('/organizations')

router.post('/', async (ctx) => {
    ctx.body = await organization.create(ctx.request.body);
    ctx.status = 200;
    
});

router.get('/', async ctx => {
    try {
        ctx.body = await organization.getAll();
        ctx.status = 200;
    }catch(error) {
        console.log(error);
        ctx.body = error;
        ctx.status = 400;
    }
})

export default router;