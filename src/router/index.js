import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import EnterOTP from '../views/EnterOTP.vue'
import Register from '../views/Register.vue'
import RegisterOTP from '../views/RegisterOTP.vue'
import confirmpassword from '../views/confirmpassword.vue'
import drawar from '../views/drawar.vue'


const routes = [

    {
        path: '/',
        component: Login
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