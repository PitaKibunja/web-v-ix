<template>
  <base-layout>
    <v-row class="mt-4">
      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto pb-0" flat>
          <v-img src="../../assets/kebs.jpg"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto pb-0" flat>
          <v-img src="../../assets/unevoc.jpg"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto pb-0" flat>
          <v-img src="../../assets/hof.png"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8" lg="6">
        <v-card class="mx-auto pb-0" flat>
          <v-img src="../../assets/2030.jpg"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4" lg="2">
        <v-card class="mx-auto pb-0" flat>
          <v-img src="../../assets/ws.jpg" width="100"></v-img>
        </v-card>
      </v-col>
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