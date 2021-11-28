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
import InstReg from '../components/Institutions/InstitutionRegistration.vue'
import TrainersReg from '../components/Institutions/TrainerRegistration.vue'
import Curricula from '../components/Institutions/Curricula.vue'
import Trainers from '../components/Trainers/TrainersRegister.vue'
import Downloads from '../components/Repo/Downloads.vue'
import Career from '../components/Repo/Career.vue'
import FAQ from '../components/FAQs/FAQ.vue'
import Management from '../components/About/Management.vue'
import History from '../components/About/History.vue'
import Who from '../components/About/Who.vue'
import Department from '../components/DepartmentsInfo/Department.vue'
import Accreditation from '../components/DepartmentsInfo/Accreditation.vue'
import Compliance from '../components/DepartmentsInfo/Compliance.vue'
import Outreach from '../components/DepartmentsInfo/Outreach.vue'
import Strategy from '../components/DepartmentsInfo/Strategy.vue'
import CustomerCare from '../components/Customer/CustomerCare.vue'
import Research from '../components/DepartmentsInfo/Research.vue'
import Standards from '../components/DepartmentsInfo/Standards.vue'
import Questions from '../components/FAQs/Questions.vue'
import CareerDetails from '../components/Repo/CareerDetails.vue'
import Tenders from '../components/Repo/Tenders.vue'
import Search from '../components/cards/Search.vue'
import MIS from '../components/TheLinks/MIS.vue'
import SMail from '../components/TheLinks/SMail.vue'
import SPortal from '../components/TheLinks/SPortal.vue'
import SPlan from '../components/TheLinks/StrategicPlan.vue'

//CMS import path starts here...
import Login from '../components/CMS/login.vue'
import Dashboard from '../components/CMS/Dashboard.vue'
import Dash from '../components/CMS/components/DashHome.vue'
import Media from '../components/CMS/components/Media.vue'
import Pages from '../components/CMS/components/Pages.vue'
import Post from '../components/CMS/components/Posts.vue'
import Profile from '../components/CMS/components/Admin Profile/Profile.vue'
import Password from '../components/CMS/components/Admin Profile/Password.vue'
import Settings from '../components/CMS/components/Admin Profile/Settings.vue'
import NewPost from '../components/CMS/components/Posts/NewPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },{
    path: "/mis",
    name: 'MIS',
    beforeEnter() {location.href = 'https://mis.tveta.go.ke/#/'},
    component: MIS,
   
  }
  ,{
    path: "/staff mail",
    name: 'Staff Mail',
    beforeEnter() {location.href = 'https://mail.tveta.go.ke'},
    component: SMail,
   
  }
  ,{
    path: "/staff portal",
    name: 'Staff Portal',
    beforeEnter() {location.href = 'https://staff.tveta.go.ke:8080'},
    component: SPortal,
   
  }
  ,{
    path: "/strategic-plan",
    name: 'Strategic Plan',
    component: SPlan,
   
},
  {
    path: '/admin/login',
    name: 'Login',
    component: Login,
    meta: {
      hideNavbar: true,
    }
    
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },{
    path: '/tenders',
    name: 'Tenders',
    component: Tenders
  },{
    path: '/career',
    name: 'Career',
    component: Career
  },{
    path: '/reginstitutions',
    name: 'InstReg',
    component: InstReg
  },{
    path: '/trainerreg',
    name: 'TrainersReg',
    component: TrainersReg
  },{
    path: '/faqs',
    name: 'FAQS',
    component: FAQ
  },{
    path: '/department',
    name: 'Department',
    component: Department
  },{
    path: '/compliance',
    name: 'Compliance',
    component: Compliance
  },{
    path: '/accreditation',
    name: 'Accreditation',
    component: Accreditation
  },{
    path: '/strategyandpolicy',
    name: 'Strategy and Policy',
    component: Strategy
  },{
    path: '/outreach',
    name: 'Outreach',
    component: Outreach
  },{
    path: '/research',
    name: 'Research',
    component: Research
  },{
    path: '/standards',
    name: 'Standards',
    component: Standards
  },{
    path: '/management',
    name: 'Management',
    component: Management
  },{
    path: '/history',
    name: 'History',
    component: History
  },{
    path: '/whoweare',
    name: 'Who',
    component: Who
  },{
    path: '/faqs/questions',
    name: 'Questions',
    component: Questions
  },{
    path: '/careerdetails/:jobId',
    name: 'Career Details',
    component: CareerDetails
  },{
    path: '/curricula',
    name: 'Curricula',
    component: Curricula
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
  },  {
    path: '/customercare',
    name: 'CustomerCare',
    component: CustomerCare
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
  ,
   {
    path: '/institution/:institutionId',
    name: 'Institution',
    component: Institution
  },
   //cms paths goes here.

  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      hideNavbar: true,
    },
    children: [
      {
        path: 'dashhome',
        component: Dash,
        meta: {
          hideNavbar: true,
        },
      },
      {
        path: 'pages',
      component: Pages,
      meta: {
        hideNavbar: true,
      }
     } ,{
      path: 'newpost',
    component: NewPost,
    meta: {
      hideNavbar: true,
    }
   }, {
      path: 'media',
      component: Media,
      meta: {
        hideNavbar: true,
      },
      },
      {
        path: 'posts',
        component: Post,
        meta: {
          hideNavbar: true,
        },
      },
      {
        path: 'settings',
        component: Settings,
        meta: {
          hideNavbar: true,
        },
      },
      
      {
        path: 'profile',
        component: Profile,
        meta: {
          hideNavbar: true,
        },
      },
      {
        path: 'settings',
        component: Settings,
        meta: {
          hideNavbar: true,
        },
      },  {
        path: 'password',
        component: Password,
        meta: {
          hideNavbar: true,
        },
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
