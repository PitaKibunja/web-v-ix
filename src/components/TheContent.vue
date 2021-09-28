<template>
      <div>
    <v-container 
      class="grey lighten-5 mb-8"
    >
         
    <span>News and Updates</span>
          <v-divider></v-divider>
          
      <v-row
        :align="center"
        no-gutters
        style="height: auto;"
      >
           <NewsTab/>        
      </v-row>     
      <v-row>
        
        </v-row>   

        <v-container class="grey lighten-5">
          <v-card
      class="d-flex justify-center mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        class="pa-2"
        flat
        tile
      >
        <ReadMore/>
      </v-card>
    </v-card>
          
          </v-container> 

    <span>Visit our Media Center</span>
          <v-divider></v-divider>
      <v-row
        :align="center"
        no-gutters
        style="height: auto;"
        class="pt-3 mb-5"
      >
        <v-col>
            <Media/>
        </v-col>
      </v-row>
      <span>Our Partners</span>
          <v-divider></v-divider>
      <v-row
        :align="center"
        no-gutters
        style="height: auto;"
        class="pt-3"
      >
        <v-col>
         <Partners/>
        </v-col>
      </v-row>
    </v-container>

    
  </div>
</template>
<script>

import Media from '../components/cards/Media.vue'
import Partners from '../components/cards/Partners.vue'
import ReadMore from '../components/Buttons/ReadMore.vue'
import NewsTab from '../components/navs/NewsTab.vue'
  export default {
      components:{
       
          Media,
           Partners,
           ReadMore,
           NewsTab
      },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>