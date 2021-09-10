<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      flat
      
    >
      <div class="d-flex">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          dark
          
          src="../src/assets/tveta_logo.png"
          transition="scale-transition"
          width="40"
        />
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light white--text">TVET </span>
                <span class="font-weight-light white--text">Authority</span>
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
 <div class="mt-15 mb-0">
   <v-app-bar class="mb-0">


    <v-tabs
      v-model="tab"
      background-color="white"
      class="pl-10 text-center "
    >
      <v-tab
        v-for="item in items"
        :key="item.tab"
        
        class="font-weight-light grey--text"
      >
        {{ item.tab }}
        
      </v-tab>
    </v-tabs>
   </v-app-bar>
 </div>

    <v-main style="padding:0px; background: lightblue ">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

    data(){
        return{
            drawer:false,
            tab: null,
            items: [
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
