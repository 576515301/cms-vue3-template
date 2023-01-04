import { defineStore } from 'pinia'
import { login, getUserInfo } from '@api/user.js'

import router from '@router/index'
import { privateRoutes } from '@router/routes'

const useUserStore = defineStore('users', {
    persist: {
        paths: ['token']
    },
    state: () => ({
        token: '',
        userInfo: {},
        menuRoutes: privateRoutes
    }),
    getters: {
        hasUserInfo() {
            return Object.keys(this.userInfo).length
        }
    },
    actions: {
        async login(data) {
            const token = await login(data);
            this.token = token.token;
            router.push('/');
        },
        async getUserInfo() {
            const info = await getUserInfo();
            const auth = info.auth;
            this.userInfo = info;
            this.menuRoutes.children = this.getAuthMenu(this.menuRoutes.children, auth);
            this.menuRoutes.redirect = this.menuRoutes.children[0].path;
        },
        getAuthMenu(list, auth) {
            let menuItem = [];
            list.map(v => {
                if (!v.auth) menuItem.push(v);
                if (v.auth && v.auth.some(v => v === auth)) {
                    if (v.children && v.children.length > 0) {
                        v.children = this.getAuthMenu(v.children, auth);
                    }
                    menuItem.push(v);
                }
            })
            return menuItem;
        }
    }
})


export {
    useUserStore
}