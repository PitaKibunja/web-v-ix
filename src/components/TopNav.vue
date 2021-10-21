<template>
  <div>
    <v-app-bar 
      color="#0082C6"
      dark
      app
      class="mb-2"
    >
    <v-toolbar-title>
        <v-card elevation="2" width="100" color="white" class="pt-4 " outlined raised :to="defacto.link">
          <v-img class="ml-0" src="../assets/tveta_logo.png"></v-img>
        </v-card>
      </v-toolbar-title>
        <div class="d-flex justify-start mb-2">
          <v-container fluid>
            <p class="text-h5 ml-4 pt-6 mb-n2">TVET</p>
            <p class="text-h5 ml-1">Authority</p>
          </v-container>
      </div> 
      <v-spacer></v-spacer>
      <template>
  <div class="text-center justify-between">
        <v-menu
      open-on-hover
      offset-y
      tile
            bottom
      origin="center center"
      transition="scale-transition"
            :rounded="rounded"

          :key="navItem"
    >
     <template v-slot:activator="{ on, attrs }" class="hidden-xs-only">  
       <v-btn
          color="white lighten-4"
          large  
          text
          v-bind="attrs"
          v-on="on"
          class="pa-2 ma-2 mr-2"
          :to="defacto.link"
        >
          <router-link to="/" tag="span" style="cursor: pointer">
           <v-icon>mdi-home</v-icon>
          Home
        </router-link>
        </v-btn>
      </template>
        </v-menu>
    <v-menu
      open-on-hover
      offset-y
      tile
            bottom
      origin="center center"
      transition="scale-transition"
            :rounded="rounded"

           v-for="navItem in links"
          :key="navItem"
    >
      
      <template v-slot:activator="{ on, attrs }" class="hidden-xs-only">  
       <v-btn
          color="white lighten-4"
          large  
          text
          v-bind="attrs"
          v-on="on"
          class="pa-4 ma-2 mr-2"
        >
        <v-icon>{{ navItem.icon }}</v-icon>
          {{ navItem.navl }}
        </v-btn>
      </template>

      <v-list>
          <v-list-item
            v-for="n in navItem.list"
            :key="n"
            @click="() => {}"
            :to="n.linker"
          >
            <v-list-item-title>{{ n.submenu }}</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>
  </div>
   <v-menu
      offset-y
      tile
            bottom
      origin="center center"
      transition="scale-transition"
            :rounded="rounded"
          :key="navItem"
          
    >
     <template v-slot:activator="{ on, attrs }" class="hidden-xs-only">  
       <v-btn
          color="white lighten-4"
          large  
          text
          v-bind="attrs"
          v-on="on"
          class="pa-2 mr-4"
        >
          <router-link to="/downloads" tag="span" style="cursor: pointer">
          Downloads
        </router-link>
        </v-btn>
      </template>
        </v-menu>
</template>
<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
        <v-card elevation="4">
                  <v-container class="supu" fixed>
                     <v-card-title class=" d-flex justify-center ma-1 pt-4">
                <v-row>
                  <v-text-field
                    placeholder="Search"
                    prepend-inner-icon="mdi-magnify"
                    dense
                  ></v-text-field>
            </v-row> 
              </v-card-title>
                  </v-container>
            <v-divider></v-divider> 
            <v-card>
              <v-container fluid>
                
                  <div class="" v-for="i in 8" :key="i">
                    <router-link class="pa-1 ma-1" style="text-decoration: none; color: inherit;" to="search">
                    <v-card  class="ma-2 pa-2">
                            
                            <v-card-title>Lorem</v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                              <v-container fluid no-gutters>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga alias quo rem, beatae ea officia ipsum deserunt facere, nobis sequi omnis voluptas. Nemo blanditiis nam, excepturi enim laboriosam esse harum.</p>
                              </v-container>
                            </v-card-text>
                            
                          </v-card>
                    </router-link>
                 
       
                  
                 </div>
                
                 <v-container fluid class="d-flex justify-center">
                    <h4>No recent searches</h4>
                  </v-container>
              </v-container>
            </v-card>
        </v-card>
    </v-dialog>
  </v-row>
</template>
























































      <v-menu
      open-on-hover
      offset-y
      tile
      
      origin="center center"
      transition="scale-transition"
      :rounded="rounded"
      bottom
      >
      
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in quick"
            :key="n"
            @click="() => {}"
            
          >
            <v-list-item-title :redirect="n.link">{{ n.Staff }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      searchbar:false,
      defacto: [
        { title: 'Home' ,link:'/home'},
        { title: 'Downloads',link:'/downloads'},
      ],
      links:[    //'Home','About us','Services','Institutions','Trainers','Curricula','Downloads'
        
        {navl:'About Us',list:[
          {submenu:'Who we are',linker:'/whoweare'},
          {submenu:'Leadership',linker:'/management'},
          {submenu:'History',linker:'/history'},
        ]},
        {navl:'Services',list:[
          {submenu:'Accreditation',linker:'/accreditation'},
          {submenu:'Compliance and Enforcement',linker:'/compliance'},
          {submenu:'Outreach',linker:'/outreach'},
          {submenu:'Standards Development',linker:'/standards'},
          {submenu:'Research',linker:'/research'},
          {submenu:'Policy and Strategy',linker:'/strategyandpolicy'},
        ]},
        {navl:'Institutions',list:[
          {submenu:'Institution Registration',linker:'/reginstitutions'},
          {submenu:'Registred Institutions',linker:'/Allinstitution'}
        ]},
        {navl:'Trainers',list:[
          {submenu:'Trainer Registration',linker:'/trainerreg'},
          {submenu:'Registred Trainers',linker:'/trainers'},
        ]},
        {navl:'Curricula',list:[
          {submenu:'Approved Curricula',linker:'/curricula'},
          {submenu:'Approved Short Courses',linker:'/shortcourses'},
        ]},    
        {navl:'Media',list:[
          {submenu:'News and Updates',linker:'/allnews'},
          
        ]}
      
        
      ]
      ,
      quick:[
        {Staff:'Staff mail',link:'https://mail.tveta.go.ke'},
        {Staff:'Staff Portal',link:'https://staff.tveta.go.ke:8080'}
      ]
    }),
    methods:{
      popSearch(){
        this.searchbar=!this.searchbar
        console.log(this.searchbar)
      }
    }
  }
</script>