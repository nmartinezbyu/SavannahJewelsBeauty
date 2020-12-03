import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import Scheduling from '../views/Scheduling.vue'
import About from '../views/About.vue'
import Admin from '../views/Admin.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/Scheduling',
    name: 'Scheduling',
    component: Scheduling
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Admin',
    name: 'Admin',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return {
      x: 0, y: 0
    }
  }
})

export default router
