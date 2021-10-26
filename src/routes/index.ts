import Router from 'koa-router';
import statusRoutes from './statusRoutes'
import organizations from './organizationsRoutes'

const apiRouter = new Router();

apiRouter.use('/', statusRoutes);
apiRouter.use('/organizations', organizations);

export default apiRouter.routes();