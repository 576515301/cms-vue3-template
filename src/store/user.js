import { defineStore } from 'pinia'
import { login, getUserInfo } from '@api/user.js'

import router from '@router/index'

const useUserStore = defineStore('users', {
    persist: {
        paths:['token']
    },
    state: () => ({
        token: '',
        userInfo: {}
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
            this.userInfo = info;
        }
    }
})


export {
    useUserStore
}