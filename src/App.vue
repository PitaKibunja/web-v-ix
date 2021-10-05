<template>
  <v-app>
    <TopNav/>
    <v-main class="mt-4 pt-4" style="padding:0px; background: white ">
      <router-view/>
      <Assistant/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
// import TopBar from './components/TopBar.vue'
import TopNav from './components/TopNav.vue'
import Assistant from './components/Assistant.vue'
export default {
  name: 'App',
  components:{
    Footer,
    TopNav,
    Assistant
  },

    data(){
        return{
            appTitle: 'TVET Authority',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home' },
          { title: 'About us', path: '/signup', icon: 'mdi-face' },
          { title: 'Services', path: '/signin', icon: 'mdi-lock_open' },
          { title: 'Media Center', path: '/signin', icon: 'mdi-lock_open' },
          { title: 'Institutions', path: '/signin', icon: 'mdi-lock_open' },
          { title: 'Trainers', path: '/signin', icon: 'mdi-lock_open' },
          { title: 'Curricula', path: '/signin', icon: 'mdi-lock_open' },
          { title: 'Downloads', path: '/downloads', icon: 'mdi-lock_open' }
     ]
        }
    },
};
</script>
