import Login from '../views/login.vue'
import Layout from '../views/layout.vue'
const publicRoutes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'layout',
        redirect:'/home',
        component: Layout,
        children: []
    },
]
const privateRoutes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
        meta: {
            title: '首页',
            icon: "home",
        }
    },
    {
        path: '/productList',
        name: 'productList',
        component: () => import('../views/productlist.vue'),
        meta: {
            title: '商品',
            icon: "shopping-bag",
        }
    },
    // {
    //     path: '/productList',
    //     name: 'productList',
    //     component: () => import('../views/productlist.vue'),
    //     meta: {
    //         title: '订单',
    //         icon: "table",
    //     }
    // },
    // {
    //     path: '/productList',
    //     name: 'productList',
    //     component: () => import('../views/productlist.vue'),
    //     meta: {
    //         title: '售后',
    //         icon: "headphones",
    //     }
    // },
    // {
    //     path: '/productList',
    //     name: 'productList',
    //     component: () => import('../views/productlist.vue'),
    //     meta: {
    //         title: '员工',
    //         icon: "users",
    //     }
    // },
    // {
    //     path: '/productList',
    //     name: 'productList',
    //     component: () => import('../views/productlist.vue'),
    //     meta: {
    //         title: '评价',
    //         icon: "thumbs-up",
    //     }
    // },
    // {
    //     name: 'productList',
    //     children: [
    //         {
    //             path: '/menu1-2',
    //             name: 'menu1-2',
    //             component: () => import('../views/productlist.vue'),
    //             meta: {
    //                 title: 'menu1-2',
    //                 icon: "thumbs-up",
    //             }
    //         },
    //     ],
    //     meta: {
    //         title: 'menu1',
    //         icon: "thumbs-up",
    //     }
    // }
]
export {
    publicRoutes,
    privateRoutes
};