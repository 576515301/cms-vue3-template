import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import beforeEach from './guard'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach(beforeEach)
export default router
