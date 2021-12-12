<template>

 <a target="_blank" :href="`/singlePost/${id}`">
                
           
    <v-card
    :loading="loading"
    class="mx-11 my-11"
    max-width="200"
    
  >
    <template slot="progress">
      <v-progress-linear
        color="#0082C6"
        
        indeterminate
      ></v-progress-linear>
    </template>
  
    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title size="medium">{{title }}</v-card-title>

    <v-card-text>
      <div>{{ body.substring(0,50)+".." }}</div>
    </v-card-text>
     <v-card-text>
      <div>{{ id }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

  </v-card>
   </a>
</template>
<script>
  export default {
    props:[
      'id',
      'title',
      'body',
    ],
    data: () => ({
      loading: false,
      selection: 1,
      news:[]
    })
  
  }
</script>