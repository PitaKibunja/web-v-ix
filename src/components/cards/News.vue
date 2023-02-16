<template>
  <a target="_blank" :href="`/singlePost/${id}`">
    <v-card :loading="loading" class="mx-3 my-3" max-width="300">
      <template slot="progress">
        <v-progress-linear color="#0082C6" indeterminate></v-progress-linear>
      </template>

      <v-row>
        <v-col cols="12" md="4">
          <v-img height="150" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
        </v-col>
        <v-col cols="12" md="8">
          <v-card-title size="medium">{{title}}</v-card-title>
          <v-card-text>{{body.substring(0,50)+".."}}</v-card-text>
          <v-card-text>{{id}}</v-card-text>
          <v-divider class="mx-4"></v-divider>
        </v-col>
      </v-row>
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