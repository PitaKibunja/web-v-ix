<template>
      <div>
    <v-container
      class="grey lighten-5 mb-5"
    >
         
    <span>News and Updates</span>
          <v-divider></v-divider>
          
      <v-row
        :align="center"
        no-gutters
        style="height: auto;"
      >
        <v-col
        v-for="n in 4"
        :key="n"
        >
            <News/>
        </v-col>
      </v-row>         
    <span>Visit our Media Center</span>
          <v-divider></v-divider>
      <v-row
        :align="center"
        no-gutters
        style="height: auto;"
        class="pt-3 mb-5"
      >
        <v-col>
            <Media/>
        </v-col>
      </v-row>
      <span>Our Partners</span>
          <v-divider></v-divider>
      <v-row
        :align="center"
        no-gutters
        style="height: auto;"
        class="pt-3"
      >
        <v-col>
         <Partners/>
        </v-col>
      </v-row>
    </v-container>

    
  </div>
</template>
<script>
import News from '../components/cards/News.vue'
import Media from '../components/cards/Media.vue'
import Partners from '../components/cards/Partners.vue'
  export default {
      components:{
          News,
          Media,
           Partners
      },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
  }
</script>