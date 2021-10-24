import combineRouters from 'koa-combine-routers'
import statusRoutes from './statusRoutes'
import organizations from './organizationsRoutes'

const router = combineRouters(
  statusRoutes,
  organizations
)

export default router