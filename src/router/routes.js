import Login from '../views/login.vue'
import Layout from '../views/layout.vue'
const routes = [
    {
        path: '/',
        redirect: "/layout"
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/layout',
        name: 'layout',
        redirect:'/home',
        component: Layout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/home.vue')
            },
            {
                path: '/productList',
                name: 'productList',
                component: () => import('../views/productlist.vue')
            }
        ]
    }
]
export default routes;