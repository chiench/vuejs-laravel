import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../view/Dashboard.vue'
import Login from '../view/Login.vue'
import Register from '../view/Register.vue'
import Survays from '../view/Survays.vue'
import Defautlayout from '../components/Defautlayout.vue'
import store from "../store";


const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        meta: { requiresAuth :false},// them 1 the meta xac thuc xem da duogn nhap chua 
        component: Defautlayout,
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'survays',
                name: 'Survays',
                component: Survays
            },

        ],
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },

];

// truoc khi route thuc hien truyen di 

const router = createRouter({
    history: createWebHistory(),
    routes
});
router.beforeEach((to, from, next) =>{
    if(store.state.user.data.token)
    next({name:'Login'});
    else{
        next()
    }
})
export default router;
