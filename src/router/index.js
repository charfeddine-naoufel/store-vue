import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'

const routes =  [
    {
        path : '/',
        component : Home,
        name : 'Home'
    },
    {
        path : '/sign-up',
        component : SignUp,
        name : 'SignUp'
    },
    {
        path : '/login',
        component : Login,
        name : 'Login'
    },
    {
        path : '/products',
        component : Products,
        name : 'Products'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes ,
})
export default router