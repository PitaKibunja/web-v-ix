<template>
  <v-app id="inspire">
      <Header @handeDrawer="drawer=!drawer" />
      <Sidebar :drawer="drawer"/>
 
    <v-main>
      <v-container
        class="mt-n8"
        fluid
      >
      <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './utility/Header.vue'
import Sidebar from './utility/Sidebar.vue'
  export default {
      components:{
          Header,
          Sidebar
      },
    data: () => ({
      cards: ['Today', 'Yesterday'],
      drawer:true
    }),
  }
</script>