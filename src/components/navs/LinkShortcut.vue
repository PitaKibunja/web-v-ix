<template>

    <div class="text-center">
    <v-spacer></v-spacer>
    <v-row  class="text-center ml-8" style="z-index:700">
         <div class="mx-8 flex-d  mt-n1"  v-for="link in links"    :key="link">
            <v-spacer></v-spacer>
            <v-col>
                <v-btn
                    class=" mb-0"
                    fab
                    dark
                    small
                    elevation="2"
                    color="#0082C6"
                    :to="link.where"
                    >
                    <v-icon size="25" dark>
                        {{ link.icon }}
                    </v-icon>
                    </v-btn>
            </v-col>
            <div class="mt-0 text-wrap">
                <v-flex>
                  {{ link.text }}
                </v-flex>
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
       
       { text: 'Customer Care', icon: 'mdi-face-agent' ,where:'/customercare' },
        { text: 'Standards', icon: 'mdi-flag', where:'/standards'},
          
         
         { text: 'TVET MIS', icon: 'mdi-login',where:'/mis' },  
        { text: 'FAQs', icon: 'mdi-frequently-asked-questions' ,where:'/faqs'},

         { text: 'Strategic Plan', icon: 'mdi-file-document-multiple' ,where:'/strategic-plan'},
         { text: 'Service Charter', icon: 'mdi-file-document-multiple', where:'/service-charter' },
        { text: '+254 700 015 440 | +254-20 2392140', icon: 'mdi-phone-classic Cell: +254 700 015 440/254 700 015 440' },


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