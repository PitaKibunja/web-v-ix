import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Slider from '../components/Slider.vue'
import Utility from '../components/UtilityLinks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/utility',
    name: 'Home',
    component: Utility
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
