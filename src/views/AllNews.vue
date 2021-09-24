<template>
<v-container>
  <v-row cols="12 " class="d-flex justify-center mb-2  pt-4">
     <div class="font-weight-medium">
                 <h2>Media Center</h2>      
                    </div>
   </v-row>
  <v-divider></v-divider> 
  <v-row class="d-flex justify-center mb-1  pa-3">
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
       
          <v-text-field
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
           
            dense
          ></v-text-field>
        </v-col>
    </v-row>   
 
  <v-row class="pt-0"> <NewsTab/></v-row> 
          <!-- </v-col> -->
        <!-- </v-row>    -->
        <v-row>
          
        </v-row>

   
</v-container>
  <!-- <v-container class="grey lighten-5">
    <v-col>
      <v-row>
        ....search goes here
      </v-row>
      <v-row>
        
        <v-card
      class="d-flex justify-center mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
      
        class="pa-2"
        outlined
        tile
      >
      <NewsTab/>
      </v-card>
    </v-card>
      </v-row>
    </v-col>
    <v-row>
      
    </v-row>
    
    <v-row no-gutters>

      <v-col
        v-for="n in 12"
        :key="n"
        cols="12"
        sm="4"
      >
        <News/>
      </v-col>
    </v-row>
    <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="15"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </v-container> -->
</template>
<script>
// import News from '../components/cards/News.vue'
import NewsTab from '../components/navs/NewsTab.vue'
  export default {
      components:{
          // News,
          NewsTab 
          
      },
    data: () => ({
        page: 1,
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>
<style scoped lang="sass">
.v-input.expanding-search 
  .v-input__slot
     &::before,&::after
       border-color: transparent
</style>