<template>
 <div class="mr-4">
    <v-toolbar app color="primary">
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title color="primary">
        <router-link to="/" tag="span" style="cursor: pointer">
          {{ appTitle }}
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
     
      <v-card>
          <v-card-title>
      
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        dense
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
        </v-card>
    </v-toolbar>
 </div>
    


</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data(){
    return {
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
<style>

</style>
