<template>
<!-- <v-container >
  <v-row cols="12 " class="d-flex justify-center mb-2  pt-4">
     <div class="font-weight-medium">
                 <h2>Media Center</h2>      
                    </div>
   </v-row> -->
   <v-container class="mt-8">
  
  <v-card  elevation="2">
   <v-card-title class="ttitle white--text">
     <v-row cols="12 " class="d-flex justify-center mb-1">
     <div class="font-weight-medium">
                 <h3>Media Center</h3>      
                    </div>
   </v-row>
    </v-card-title>
   
  <v-divider></v-divider> 
  <v-card>
    <v-card-title class=" d-flex justify-center ma-1 pa-4">
<v-row>
      
       
          <v-text-field
            placeholder="Search"
            prepend-inner-icon="mdi-magnify"
            dense
          ></v-text-field>
        
    </v-row>  
    </v-card-title>
      <NewsTab/>
  </v-card>
   

    </v-card>
</v-container>

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