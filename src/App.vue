<template>
  <v-app>
    <v-app-bar
      color="primary"
      app
      dark
      flat
      style="height:45px"
      
    >
      <div class="d-flex">
       
            <v-toolbar-title class="text-uppercase grey--text">
              <h5 > Call Us Today! Tel: +254-20 2392140 | Cell: +254 700 015 440|info@tveta.go.ke</h5>
            </v-toolbar-title>
      </div>
 <v-spacer></v-spacer>
 <div>
 </div>
     
      
       <v-spacer></v-spacer>
 
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
       
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
    </v-app-bar>   
 <div class="mt-12 mb-0">
   <v-app-bar  class="mb-0" style="height:50px">
      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          dark
          
          src="../src/assets/tveta_logo.png"
          transition="scale-transition"
          width="40"
        />
    <v-menu
      open-on-hover
      top
      offset-y
    >
    <v-tabs
      v-model="tab"
      background-color="white"
      class="pl-10 text-center "
    >
      <v-tab
        v-for="item in items1"
        :key="item.tab"
        
        class="font-weight-light grey--text"
      >
        {{ item.tab }}
        
      </v-tab>
       </v-tabs>
       <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
           link
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
   
    </v-menu>
   </v-app-bar>
 </div>

    <v-main style="padding:0px; background: white ">
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components:{
    Footer
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
