import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SliderLayout from '../components/SliderLayout.vue'
import Utility from '../components/UtilityLinks.vue'
import Institution from '../components/Institutions/SingleInstitutions.vue'
// import Assistant from '../components/cards/Assistant.vue'
import AllNews from '../views/AllNews.vue'
import SingleNews from '../views/SingleNews.vue'
import SInst from '../components/Institutions/SingleInstitutions.vue'
import AllInst from '../components/Institutions/AllInstitutions.vue'
import Trainers from '../components/Trainers/TrainersRegister.vue'
import Downloads from '../components/Repo/Downloads.vue'
import Search from '../components/cards/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path: '/institution',
    name: 'Institution',
    component: Institution
  },{
    path: '/search',
    name: 'Search',
    component: Search
  },{
    path: '/trainers',
    name: 'Trainers',
    component: Trainers
  },
  {
    path: '/downloads',
    name: 'Downloads',
    component:Downloads
  },
  {
    path: '/Allinstitution',
    name: 'AllInstitution',
    component: AllInst
  },
  {
    path:'/allnews',
    name: 'All News',
    component: AllNews,
  },
  {
      path:'/singlePost',
      name:'Single Post',
      component:SingleNews
  },
  // {
  //   path:'/assistant',
  //   name:'Assistant',
  //   component:Assistant
  // },
  {
    path: '/sInst:inst',
    name: 'SInst',
    component: SInst
  },
  {
    path: '/utility',
    name: 'Home',
    component: Utility
  },
  {
    path: '/slider',
    name: 'SliderLayout',
    component: SliderLayout
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
