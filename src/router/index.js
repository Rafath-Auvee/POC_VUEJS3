import { createRouter, createWebHistory } from 'vue-router'
// import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import EnterOTP from '../views/EnterOTP.vue'
import Register from '../views/Register.vue'
import RegisterOTP from '../views/RegisterOTP.vue'
import confirmpassword from '../views/confirmpassword.vue'
import drawar from '../views/drawar.vue'
import AppLayout from '../layouts/AppLayout.vue'
const lazyLoad = (view) => () => import(`@/views//Exam Management/${view}.vue`);

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: lazyLoad('Dashboard'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: lazyLoad('Dashboard'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/exam-pack',
        name: 'Exam_Pack',
        component: lazyLoad('Exam_Pack'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/exam-pack/:packTitle',
        name: 'ExamUnpack',
        component: lazyLoad('ExamUnpack'),
        props: true,
        meta: {
            layout: AppLayout
        }
    },
    
    {
        path: '/reporting',
        name: 'Reporting',
        component: lazyLoad('Reporting'),
        meta: {
            layout: AppLayout
        }
    },
    {
        path: '/reporting/:examId',
        name: 'SpecificExamReport',
        component: lazyLoad('SpecificExamReport'),
        meta: {
            layout: AppLayout
        }
    },

    {
        path: '/edit-profile',
        name: 'EditProfile',
        component: lazyLoad('EditProfile'),
        meta: {
            layout: AppLayout
        }
    },
   
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/forgotpassword',
        component: ForgotPassword
    },
    {
        path: '/enterotp',
        component: EnterOTP
    },
    {
        path: '/password',
        component: confirmpassword
    },
    {
        path: '/register',
        component: Register
    },

    {
        path: '/registerotp',
        component: RegisterOTP
    },

    {
        path: '/draft',
        component: drawar
    },
    
    

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router