import Login from '../views/login.vue'
import Layout from '../views/layout.vue'
const publicRoutes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
]
const privateRoutes = {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue'),
            meta: {
                title: '首页',
                icon: "home",
            },
            auth: [1, 2, 3]
        },
        {
            path: '/productList',
            name: 'productList',
            component: () => import('../views/productlist.vue'),
            meta: {
                title: '商品',
                icon: "shopping-bag",
            },
            auth: [1, 2]
        },
        {
            path: '/order',
            name: 'order',
            component: () => import('../views/order.vue'),
            meta: {
                title: '订单',
                icon: "table",
            },
            auth: [1, 2, 3]
        },
        {
            path: '/system',
            name: 'system',
            children: [
                {
                    path: '/system-1',
                    name: 'system-1',
                    component: () => import('../views/system-1.vue'),
                    meta: {
                        title: 'system-1',
                        icon: "thumbs-up",
                    },
                    auth: [1]
                },
                {
                    path: '/system-2',
                    name: 'system-2',
                    component: () => import('../views/system-2.vue'),
                    meta: {
                        title: 'system-2',
                        icon: "thumbs-up",
                    },
                    auth: [2]
                },
            ],
            meta: {
                title: 'menu1',
                icon: "thumbs-up",
            },
            auth: [1, 2]
        }
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

    ]
}
export {
    publicRoutes,
    privateRoutes
};