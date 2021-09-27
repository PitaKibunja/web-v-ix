<template>
<div>
      <v-carousel cycle class="mt-0 pt-0" :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <div class="ml-2 mt-1 mb-4">
    <LinkShortcut/>
  </div>

  <!-- Create the cards -->
    <!-- <UtilityLinks /> -->
    <v-divider></v-divider>
</div>

</template>
<script>
// import UtilityLinks from './UtilityLinks.vue'
import LinkShortcut from './navs/LinkShortcut.vue'
  export default {
      components:{
          // UtilityLinks
          LinkShortcut
      },

    data () {
      return {
          links: [
       
       { text: 'Customer Care', icon: 'mdi-face-agent' },
        { text: 'Standards', icon: 'mdi-flag' },
          
         
         { text: 'MIS', icon: 'mdi-login' },  
        { text: 'FAQs', icon: 'mdi-frequently-asked-questions' },

         { text: 'Strategic Plan', icon: 'mdi-strategy' },
         { text: 'Service Charter', icon: 'mdi-strategy' },



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
            src: '../assets/slider/iso.jpg',
          },
          {
           src: '../assets/slider/Dku.jpg',
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