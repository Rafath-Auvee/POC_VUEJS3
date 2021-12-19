import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../layouts/AppLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
const lazyLoadExam = (view) => () => import(`@/views/Exam Management/${view}.vue`);
const lazyLoadLogin = (view) => () => import(`@/views/Login Register/${view}.vue`)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
    },

    {
        path: '/login-register',
        name: 'LoginRegister',
        component: () => import('@/views/LoginRegister.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: lazyLoadLogin('Login'),
        meta: {
            layout: AuthLayout
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: lazyLoadLogin('Register'),
        meta: {
            layout: AuthLayout
        }
    },


    {
        path: '/dashboard',
        name: 'Dashboard',
        component: lazyLoadExam('Dashboard'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/exam-pack',
        name: 'Exam_Pack',
        component: lazyLoadExam('Exam_Pack'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/exam-pack/:packTitle',
        name: 'ExamUnpack',
        component: lazyLoadExam('ExamUnpack'),
        props: true,
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/exam/:examId',
        name: 'ExamPage',
        component: lazyLoadExam('ExamPage'),
        props: true,
    },
    
    {
        path: '/reporting',
        name: 'Reporting',
        component: lazyLoadExam('Reporting'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/reporting/:examId',
        name: 'SpecificExamReport',
        component: lazyLoadExam('SpecificExamReport'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/student-management',
        name: 'StudentManagement',
        component: lazyLoadExam('StudentManagement'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/student/:studentId',
        name: 'SpecificStudent',
        component: lazyLoadExam('SpecificStudent'),
        meta: {
            layout: AppLayout
        }
    },

    {
        path: '/edit-profile',
        name: 'EditProfile',
        component: lazyLoadExam('EditProfile'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/user-management',
        name: 'UserManagement',
        component: lazyLoadExam('UserManagement'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/account-management',
        name: 'AccountManagement',
        component: lazyLoadExam('AccountManagement'),
        meta: {
            layout: AppLayout
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router