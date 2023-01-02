import { defineStore } from 'pinia'
import { login, userInfo } from '@api/user.js'
import router from '@router/index'

const useUserStore = defineStore('users', {
    persist: true,
    state: () => {
        return {
            token: "",
            userInfo: {}
        }
    },
    actions: {
        async login(data) {
            const token = await login(data);
            this.token = token.token;
            // localStorage.setItem('token', this.token);
            router.push('/home');
        },
        async userInfo(data) {
            const info = await userInfo(data);
            this.userInfo = info;
            // localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        }
    }
})


export {
    useUserStore
}