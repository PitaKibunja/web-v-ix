<template>
    <div class="mt-10  pt-0 mb-0" style="background:white;">
   <v-app-bar app class="pt-1">
       <v-card width="90" class="my-0 pt-0">
                 <v-img
          alt="Vuetify Logo"
          class="shrink  mt-4"
          contains
          
          src="../../src/assets/tveta_logo.png"
          transition="scale-transition"
          width="100"
          
        />
        
       </v-card>

    <v-tabs
      v-model="tab"
      background-color="primary"
    
      class="pl-0 text-center "
    >
      <v-tab
        v-for="item in items1"
        :key="item.tab"
        
        class="font-weight-light white--text"
      >
        {{ item.tab }}
        
      </v-tab>
       </v-tabs>
   </v-app-bar>
 </div>
</template>
<script>
   export default {
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