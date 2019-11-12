import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import QuestionCategories from '@/views/QuestionCategories'
import QuestionBox from '@/views/QuestionBox'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/categories',
        name: 'categories',
        component: QuestionCategories
    },
    {
        path:'/categories/:id',
        name: 'questionBox',
        component: QuestionBox
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router