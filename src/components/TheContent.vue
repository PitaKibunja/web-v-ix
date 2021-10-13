<template>
<div>
  <v-container class="mt-2"> 
    <v-card elevation="2">
      <v-card class="mb-4">
        <v-card-title>
          <v-row cols="12 " class="d-flex justify-center mb-4 ml-4  pt-2">
              <div class="font-weight-medium">
                 <h3>News and Updates</h3>      
                    </div>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card>
           <NewsTab/>
        </v-card>
        <v-card class="pt-2 pb-8">
            <ReadMore/>
        </v-card>
        
        <v-card class="pt-2 pb-4"  flat>
          <v-card-title>
            <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
              <div class="font-weight-medium">
                 <h3>Social Media</h3>      
                    </div>
          </v-row>
          </v-card-title>
          <v-divider></v-divider>
           <v-card class="ma-1 pb-4">
             <Media/>
           </v-card>
        </v-card>
             
        <v-card class="pt-2 pb-0"  flat>
          <v-card-title>
            <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
              <div class="font-weight-medium">
                 <h3>Our Partners</h3>      
                    </div>
          </v-row>
          </v-card-title>
          <v-divider></v-divider>
           <v-card class="ma-4 pa-4">
             <Partners/>
           </v-card>
        </v-card>
      </v-card>
    </v-card>
  </v-container>
</div>
   <!-- <v-container class="mt-8">
  
  <v-card  elevation="2"> -->
      <!-- <div>
    <v-container 
      class="grey lighten-5 mb-8 mt-8"
    >
    <v-card>
        <v-card  elevation="2">
   <v-card-title>
    <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
     <div class="font-weight-medium">
                 <h3>News and Updates</h3>      
                    </div>
   </v-row>
    </v-card-title>
    <v-divider></v-divider>
          <v-row
        :align="center"
        no-gutters
        style="height: auto;"
      >
           <NewsTab/>        
      </v-row> 
      <v-row class="d-flex justify-center mb-1 ml-4  pt-2">
              <v-card
        class="pa-2"
        flat
        tile
      >
        <ReadMore/>
      </v-card>
      </v-row>
      <v-row>
            Visit our Media Center
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
      </v-row>
      <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
        <v-card  elevation="2">
   <v-card-title>
     <div class="font-weight-medium">
                 <h3>Our Partners</h3>      
                    </div>
    </v-card-title>
    <v-divider></v-divider>
                <v-row
        :align="center"
        no-gutters
        style="height: auto;"
        class="pt-3"
      >
        <v-col cols="12">
         <Partners/>
        </v-col>
      </v-row>
        </v-card>
       
      </v-row>
    </v-card>    
    </v-card> 
        <v-container class="grey lighten-5">
          <v-card
      class="d-flex justify-center mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >

    </v-card>
          
          </v-container>  -->



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