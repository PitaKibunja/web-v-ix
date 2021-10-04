<template>
  <v-app>
<v-toolbar app color="primary" flat   class="mt-n1">
  <v-card  width="100" class="my-1 mx-1 pt-0" z-index="200">
           <v-img contains transition="scale-transition" width="100" src="./assets/tveta_logo.png" clas="mt-n16 pa-1 shrink"></v-img>      
  </v-card>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title >
        <router-link to="/" tag="span" style="cursor: pointer">
          
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only pa-2" >
        <v-btn
        color="primary"
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        
      </v-toolbar-items>
     <v-spacer></v-spacer>
      <v-card  color="primary" class="mt-n1" flat>
          <v-card-title>
            <v-btn><v-icon>mdi-magnify</v-icon></v-btn>
        </v-card-title>
        </v-card>
              <v-card  color="primary" class="mt-2" flat>
          <v-card-title>
            <v-btn><v-icon>mdi-chevron</v-icon></v-btn>
        </v-card-title>
        </v-card>
    </v-toolbar>
    <v-main style="padding:0px; background: white ">
      <router-view/>
      <Assistant/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
// import TopBar from './components/TopBar.vue'
// import TopNav from './components/TopNav.vue'
import Assistant from './components/Assistant.vue'
export default {
  name: 'App',
  components:{
    Footer,
    // TopNav,
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
