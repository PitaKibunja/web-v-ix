<template>
  <v-container class="grey lighten-5">
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
  </v-container>
</template>
<script>
import News from '../components/cards/News.vue'

  export default {
      components:{
          News,
          
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