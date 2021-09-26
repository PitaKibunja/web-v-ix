<template>
   <v-container fluid class="d-flex justify-center mb-2  mt-1 " >
        
    <v-row no-gutters class="mt-10">
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
           <Post/>
           <v-divider></v-divider>
          <p>By James Momanyi | August 27th, 2021 | Latest News, News and Events <a href="#">Comments 0</a></p>
        </v-card>
      </v-col>
      <v-col
        cols="2"
        md="4"
        
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <h5 class="mb-6">Related Posts</h5>
        <v-divider></v-divider>
         
             <v-card
    class="mx-auto mt-2 mb-2"
    max-width="344"
    outlined
    v-for="n in 6" :key="n"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          TVETA NEWS
        </div>
        <v-list-item-title class="text-h5 mb-1">
          World Skills Show
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
          
   
        </v-card>
      </v-col>
    </v-row>
   </v-container>

</template>
<script>
import Post from '../components/Posts/Post.vue'
export default {
components:{
  Post
}
}
</script>