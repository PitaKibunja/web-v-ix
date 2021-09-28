<template>
    <div class="text-center">
    <v-spacer></v-spacer>
    <v-row  class="text-center ml-8">
         <div class="mx-12 flex-d  mt-0"  v-for="link in links"    :key="link">
            <v-spacer></v-spacer>
            <v-col>
                <v-btn
                    class=" mb-0"
                    fab
                    dark
                    small
                    elevation="2"
                    color="primary"
                    >
                    <v-icon size="30" dark>
                        {{ link.icon }}
                    </v-icon>
                    </v-btn>
            </v-col>
            <div class="mt-0">
                {{ link.text }}
            </div>
         
    </div>
    </v-row>
  </div>
</template>
<script>

  export default {
    data () {
      return {
          links: [
       
       { text: 'Customer Care', icon: 'mdi-face-agent' },
        { text: 'Standards', icon: 'mdi-flag' },
          
         
         { text: 'TVET MIS', icon: 'mdi-login' },  
        { text: 'FAQs', icon: 'mdi-frequently-asked-questions' },

         { text: 'Strategic Plan', icon: 'mdi-file-document-multiple' },
         { text: 'Service Charter', icon: 'mdi-file-document-multiple' },
         { text: 'TVET Act 2013', icon: 'mdi-gavel' },



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
            src: '../../assets/Dku.jpg',
          },
          {
            src: '../../assets/',
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