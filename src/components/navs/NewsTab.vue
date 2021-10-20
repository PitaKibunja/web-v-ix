<template>

  <v-card >
    <v-toolbar
      color="white"
     class=" pt-0"
      center-active
      flat 
      
    >


        <v-tabs
          v-model="tab"
          class="bady white--text d-flex justify-center"
          align-with-title

        >
          <v-tabs-slider color="supu"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
           dark
          >
          <span class="white--text text-center justify-center p-4" >
             {{ item }}
          </span>
           
          </v-tab>
        </v-tabs>

    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
        <v-row
        :align="center"
        no-gutters
        style="height: auto;"
      >
        <v-col
        v-for="n in 8"
        :key="n"
        >
            <News/>

        </v-col>
              
      </v-row> 
          
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import News from '../cards/News.vue'
  export default {
    components:{
      News
    },
    data () {
      return {
        tab: null,
        items: [
          'All', 'Notices', 'News', 'KJ of TVET'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>