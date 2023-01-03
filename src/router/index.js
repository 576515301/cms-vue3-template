import { createRouter, createWebHashHistory } from 'vue-router'
import { publicRoutes, privateRoutes } from './routes'
import { useUserStore } from '@store/user.js'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: publicRoutes
})
router.beforeEach(async (to, from, next) => {
	const isToLogin = to.path === "/login";
	const userStore = useUserStore();
	if (userStore.token) {
		if (isToLogin) {
			next('/')
		} else {
			if (!userStore.hasUserInfo) {
				await userStore.getUserInfo();
				privateRoutes.map(i => {
					router.addRoute('layout',i);
				})
				next({ ...to, replace: true })
			} else {
				next();
			}
		}
	} else {
		if (isToLogin) next();
		else next('/login');
	}
})
export default router
