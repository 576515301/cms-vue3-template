import { defineStore } from 'pinia'
import { login } from '@api/user/login.js'
import router from '@router/index'

const useUserStore = defineStore('users', {
    state: () => {
        return {
            token: "",
        }
    },
    actions: {
        async login(data) {
            const token = await login(data);
            this.token = token.token;
            localStorage.setItem('token', this.token);
            router.push('/home');
        }
    }
})


export {
    useUserStore
}