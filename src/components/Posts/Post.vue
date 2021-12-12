<template>
<v-container fluid >
        <v-card class="ma-0 " width="400" height="400" >
            <img  style="width:800px; height:400px;" src="../../assets/Dku.jpg" alt="Post">
        </v-card>
        <div class="mt-2 ">
            <h1>{{ heading }}</h1>
              <p class="ma-2 text-justify">
                  {{ post }}
            </p>
        </div>
</v-container>
</template>
<script>
  export default {
    props:[
        'heading',
        'post'
         ],
    data: () => ({
      loading: false,
      selection: 1,
      news:[]
    })
  
  }
</script>