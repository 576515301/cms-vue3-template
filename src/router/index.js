import { createRouter, createWebHashHistory } from 'vue-router'
import { publicRoutes } from './routes'
import { useUserStore } from '@store/user.js'

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: publicRoutes
})
router.beforeEach(async (to, from, next) => {
	const isToLogin = to.path === "/login";
	const userStore = useUserStore();
	console.log(router.getRoutes(),111)
	if (userStore.token) {
		if (isToLogin) {
			next('/')
		} else {
			if (!userStore.hasUserInfo) {
				await userStore.getUserInfo();
				console.log(userStore.menuRoutes, 222)
				console.log(router.getRoutes(), 333)
				router.addRoute(userStore.menuRoutes);
				console.log(router.getRoutes(), 444)
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
