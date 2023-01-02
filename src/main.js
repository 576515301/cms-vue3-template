import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/normalize.css'
import "./assets/style/reset.css";
import Icon from "./components/icon.vue";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app
    .use(pinia)
    .use(router)
    .use(ElementPlus)
    .component("Icon", Icon)
    .mount('#app')
