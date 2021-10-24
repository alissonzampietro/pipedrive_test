import Router from 'koa-router';
import { queryBuilder } from '../services/db';
const router = new Router();

router.prefix('/organizations')

router.post('/', async ctx => {
    try {

        ctx.body = await queryBuilder('SELECT * FROM organizations');
        ctx.status = 200;
    }catch(error) {
        console.log(error);
        ctx.body = error;
        ctx.status = 400;
    }
});


export default router;