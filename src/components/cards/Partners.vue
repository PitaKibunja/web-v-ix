<template>
<base-layout>
<v-row class="mt-4">
    <v-card
    class="mx-auto pb-0"
    max-width="80"
     flat
  >
    <v-img
      src="../../assets/kebs.jpg"
     style=" height:auto; width:auto; margin:5px; padding:0px;"
    ></v-img>
</v-card><v-card
    class="mx-auto pb-0"
    max-width="180"
     flat
  >
    <v-img
      src="../../assets/unevoc.jpg"
       style=" height:auto; width:auto; padding:0px;margin:10px;"

    ></v-img>
</v-card><v-card
    class="mx-auto pb-0"
    max-width="80"
     flat
  >
    <v-img
      src="../../assets/hof.png"
      style=" height:auto; width:100px;"
    ></v-img>
</v-card><v-card
    class="mx-auto pb-0"
    max-width="380"
     flat
  >
    <v-img
      src="../../assets/2030.jpg"
      
      style=" height:auto; width:200px;padding-top:2px;margin:1px; "
    ></v-img>
</v-card>
<v-card
    class="mx-auto pb-n4"
    max-width="280"
    flat
  >
    <v-img
      src="../../assets/big4.jpg"
      class="ma-2 pa-1 ml-4"
     width="120"
    ></v-img>
</v-card>
<v-card
    class="mx-auto pb-0"
    max-width="280"
    flat
  >
    <v-img
      src="../../assets/ws.jpg"
      class="ma-4 pa-1 ml-4"
     width="100"
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