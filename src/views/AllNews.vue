<template>
<v-container fluid>
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
        <v-row>
          <v-col>
            <v-row>
              <v-row class="mx-10">  <span>Search Media Center</span></v-row>
          <v-text-field
            placeholder="Search"
           append-outer-icon="mdi-magnify"
           class="ml-4 pt-4"
           dense
           max-width="10"
            filled
          ></v-text-field>
     
            </v-row>
            <v-row>
                  <NewsTab/>
            </v-row>
          </v-col>
        </v-row>   
        <v-row>
          
        </v-row>
      </v-card>
    </v-card>
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