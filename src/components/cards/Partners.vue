<template>
<base-layout>
<v-row class="mt-4">
    <v-card
    class="mx-auto pb-0"
    max-width="100"
  >
    <v-img
      src="../../assets/kebs.jpg"
     style=" height:auto; width:auto; margin:5px; padding:0px;"
    ></v-img>
</v-card><v-card
    class="mx-auto pb-0"
    max-width="200"
  >
    <v-img
      src="../../assets/unevoc.jpg"
       style=" height:auto; width:auto; padding:0px;margin:10px;"

    ></v-img>
</v-card><v-card
    class="mx-auto pb-0"
    max-width="100"
  >
    <v-img
      src="../../assets/hof.png"
      style=" height:auto; width:100px;"
    ></v-img>
</v-card><v-card
    class="mx-auto pb-0"
    max-width="400"
  >
    <v-img
      src="../../assets/2030.jpg"
      style=" height:auto; width:200px;padding-top:2px;margin:1px; "
    ></v-img>
</v-card>
<v-card
    class="mx-auto pb-0"
    max-width="200"
  >
    <v-img
      src="../../assets/ws.jpg"
      style=" height:20px; width:50px;padding:2px;margin:10px; "
    ></v-img>
</v-card>
</v-row>
    
</base-layout>        
</template>
<script>
export default {
    data: () => ({
      partners:[
          '../assets/2030.jpg',
          '../assets/hof.png',
          '../assets/unevoc.jpg',
          '../assets/kebs.jpg',

          
      ]
    }),
  }
</script>