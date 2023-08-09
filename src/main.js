import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './assets/style.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import axios from "axios";
import router from "@/router/router";
import('preline')
const app = createApp(App)
axios.defaults.baseURL="https://httpbin.org"
app.config.globalProperties.$http=axios
app.use(ElementPlus).use(router).mount('#app')
