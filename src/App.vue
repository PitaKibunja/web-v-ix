<template>
  <v-app>
    <v-row class="container-fluid">
      <v-col class="mt-0"><TopNav/></v-col>
    </v-row>
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
            drawer:false,
            tab: null,
              items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
            items1: [
              { tab: 'Home', content: 'Tab 1 Content' },
              { tab: 'About', content: 'Tab 2 Content' },
              { tab: 'Services', content: 'Tab 3 Content' },
              { tab: 'Media Center', content: 'Tab 4 Content' },
              { tab: 'Institutions', content: 'Tab 5 Content' },
              { tab: 'Trainers', content: 'Tab 6 Content' },
              { tab: 'Carricular', content: 'Tab 7 Content' },
              { tab: 'Downloads', content: 'Tab 8 Content' }
            ],
              items2: [
              { tab: 'Contact us', content: 'Tab 1 Content' },
              { tab: 'MIS Portal', content: 'Tab 2 Content' },
              { tab: 'Staff Portal', content: 'Tab 3 Content' },
              { tab: 'Mail', content: 'Tab 4 Content' },
              { tab: 'Tenders', content: 'Tab 5 Content' },
              { tab: 'Careers', content: 'Tab 6 Content' },
              { tab: 'FAQs', content: 'Tab 7 Content' },
             
            ],
            links:[
                {icon:'mdi-view-dashboard',text:'Dashboard', route:'/'},
                {icon:'mdi-folder',text:'My Projects', route:'/projects'},
                {icon:'mdi-microsoft-teams',text:'Team', route:'/team'}
            ]
        }
    },
};
</script>
