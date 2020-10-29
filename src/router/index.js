import Vue from 'vue'
import store from '../store/index.js'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secure from '../views/Secure.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
   component: Home
  },
  {
    path: '/about',
    name: 'About',
   component: About
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
  {
    path: '/secure',
    name: 'Secure',
   component: Secure,
   meta: {
    requiresAuth: true
  }
  }
]



const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
