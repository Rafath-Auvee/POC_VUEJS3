import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/Dashboard.vue')
    },
    {
        path: '/exam-pack',
        name: 'ExamPack',
        component: () =>
            import ('../views/Exam_Pack.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router