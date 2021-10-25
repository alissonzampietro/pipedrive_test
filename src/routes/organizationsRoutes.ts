import Router from 'koa-router';
import * as organization from './../services/organizationService';
const router = new Router();

router.prefix('/organizations')

router.post('/', async (ctx) => {
    try {
        await organization.create(ctx.request.body);
        ctx.status = 201;
    }catch(error) {
        ctx.body = error;
        ctx.status = 422;
    }
});

router.get('/', async ctx => {
    if(ctx.request.query.name && ctx.request.query.name != '') {
        let org = await organization.getByIndex(ctx.request.query.name);
        if(!org) {
            ctx.body = 'Not found';
            ctx.status = 404;
            return;
        }

        ctx.body = await organization.getOrgTree(org.id);
        return;
    }
    
    ctx.body = 'Not found';
    ctx.status = 404;
})

export default router;