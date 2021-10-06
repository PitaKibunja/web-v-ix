<template>
  <div>
    <v-app-bar 
      color="primary accent-4"
      dark
      app
      class="mb-2"
    >
      <v-toolbar-title>
        <v-card elevation="2" width="100" color="white" class="pt-4 " outlined raised :to="defacto.link">
          <v-img class="ma-1" src="../assets/tveta_logo.png"></v-img>
        </v-card>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <template>
  <div class="text-center mr-8 justify-between">
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
          class="pa-4 ma-2"
          :to="defacto.link"
        >
        <v-icon>mdi-home</v-icon>
          <router-link to="/" tag="span" style="cursor: pointer">
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
          class="pa-4 ma-2"
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
          class="pa-2"
        >
          <router-link to="/downloads" tag="span" style="cursor: pointer">
          Downloads
        </router-link>
        </v-btn>
      </template>
        </v-menu>
</template>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
      open-on-hover
      offset-y
      tile
      origin="center center"
      transition="scale-transition"
      :rounded="rounded"
        left
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
      defacto: [
        { title: 'Home' ,link:'/home'},
        { title: 'Downloads',link:'/downloads'},
      ],
      links:[    //'Home','About us','Services','Institutions','Trainers','Curricula','Downloads'
        
        {navl:'About Us',list:[
          {submenu:'Who we are',linker:'/who'},
          {submenu:'Leadership',linker:'/leadership'},
          {submenu:'Location',linker:'/location'},
          {submenu:'History',linker:'/history'},
        ]},
        {navl:'Services',list:[
          {submenu:'Accreditation',linker:'accreditation'},
          {submenu:'Compliance and Enforcement',linker:'/compliance'},
          {submenu:'Outreach',linker:'/outreach'},
          {submenu:'Standards Development',linker:'/standards'},
          {submenu:'Research',linker:'/research'},
          {submenu:'Policy and Strategy',linker:'/policy'},
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
          {submenu:'Gallery',linker:'/gallery'},
        ]},
        
      ]
      ,
      quick:[
        {Staff:'Staff mail',link:'https://mail.tveta.go.ke'},
        {Staff:'Staff Portal',link:'https://staff.tveta.go.ke:8080'},
        {Staff:'Staff MIS',link:'/institution'},
      ]
    }),
  }
</script>