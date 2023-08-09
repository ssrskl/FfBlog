import Login from "@/pages/Login.vue";
import SideBar from "@/components/SideBar.vue";
import Index from "@/pages/Index.vue";
import Register from "@/pages/Register.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import IndexMain from "@/components/IndexMain.vue";

const routes = [
    {
        path: '/', redirect: '/home'

    },
    {
        path: '/home', component: Index,
        children: [
            {
                path: '', component: IndexMain
            },
            {
                path: 'index', component: () => import('@/components/IndexMain.vue')
            },
            {
                path: 'article/:articleId', component: () => import('@/components/ArticleMain.vue')
            }
        ]
    },
    {
        path: '/register', component: Register
    },
    {
        path: '/login', component: Login
    },
    {
        path: '/sidebar', component: SideBar
    },
    {
        path: '/test/:id', component: () => import('@/pages/Test.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export function navigateToLogin() {
    router.push('/login')
}

export function navigateToRegister() {
    router.push('/register')
}

export function navigateToIndex() {
    router.push('/')
}

export function navigateToArticle(articleId) {
    router.push('/home/article/' + articleId)
}

export function navigateToSideBar() {
    router.push('/sidebar')
}

export default router