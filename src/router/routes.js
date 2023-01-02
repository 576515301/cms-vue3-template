import Login from '../views/login.vue'
import layout from '../views/layout.vue'
const routes = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/layout',
        name: 'layout',
        component: layout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home.vue')
            }
        ]
    }
]
export default routes;