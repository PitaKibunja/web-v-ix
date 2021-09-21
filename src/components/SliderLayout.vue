<template>
<div>
      <v-carousel class="mt-0 pt-0" :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
    
  </v-carousel>
  <v-card-text>
    <v-spaceer></v-spaceer>
        <v-btn
          v-for="link in links"
          :key="link"
          class="  justify-space-between mt-2 mb-6 mx-16 primary--text"
          color="#26c6da"
          icon
          
        >
        <div class="ml-10 pb-8 pt-13">
          <v-btn
            elevation="2"
            fab
            color="primary"
            small
          >
                    <v-icon size="35px">
            {{ link.icon }}
          </v-icon>
          </v-btn>

         <div class="mx-14 pt-3">
               {{ link.text }}
         </div>
    
        
          </div>
        </v-btn>
      </v-card-text>
  <!-- Create the cards -->
    <!-- <UtilityLinks /> -->
    <v-divider></v-divider>
</div>

</template>
<script>
// import UtilityLinks from './UtilityLinks.vue'
  export default {
      components:{
          // UtilityLinks
      },

    data () {
      return {
          links: [
       
       { text: 'Support', icon: 'mdi-face-agent' },
        { text: 'Standards', icon: 'mdi-flag' },
        { text: 'Complaints', icon: 'mdi-thumb-down' },  
         
         { text: 'MIS', icon: 'mdi-login' },  
        { text: 'FAQs', icon: 'mdi-frequently-asked-questions' },

         { text: 'Strategic Plan', icon: 'mdi-strategy' },
         { text: 'Standards Charter', icon: 'mdi-strategy' },



      ],
              icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
        'mdi-face-agent',
        'mdi-strategy',
      ],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>