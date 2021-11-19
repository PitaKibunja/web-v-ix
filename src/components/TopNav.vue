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
     <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="100"
      offset-y
      
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>

        <v-list>
          <v-list-item>
           <v-list-item-content>
                          <v-form class="mb-n8">
            <v-text-field
            persistent
            rounded
            outlined
            dense
            placeholder="Search..."
            append-icon="mdi-magnify"
            ></v-text-field>
          </v-form>
            
            
            </v-list-item-content>

          </v-list-item>
        </v-list>
    </v-menu>
  </div>
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
const baseURL="http://localhost:3000/api_v_1"
  export default {
    data: () => ({
      searchbar:false,
      defacto: [
        { title: 'Home' ,link:'/home'},
        { title: 'Downloads',link:'/downloads'},
      ],
      links:[]
      ,
      quick:[
        {Staff:'Staff mail',link:'https://mail.tveta.go.ke'},
        {Staff:'Staff Portal',link:'https://staff.tveta.go.ke:8080'}
      ]
    }),
    beforeCreate(){
      this.fetchData()
    },
    created(){
      this.fetchData()
    },
    watch:{
      '$route':'fetchData'
    },
    methods:{
      popSearch(){
        this.searchbar=!this.searchbar
        
      },
      async fetchData(){
        try{
          const res=await fetch(`${baseURL}/navs`)
          if(!res.ok){
            const message=`An error has occured:${res.status}-${res.statusText}`
            throw new Error(message)
          }
          const data=await res.json()
          this.links=data
        }catch(error){
          this.links
        }
      }
    }
  }
</script>