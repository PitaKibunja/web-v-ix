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
                    color="#0082C6"
                    :to="link.where"
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
       
       { text: 'Customer Care', icon: 'mdi-face-agent' ,where:'/customercare' },
        { text: 'Standards', icon: 'mdi-flag', where:'/standards'},
          
         
         { text: 'TVET MIS', icon: 'mdi-login',where:'https://mis.tveta.go.ke/' },  
        { text: 'FAQs', icon: 'mdi-frequently-asked-questions' ,where:'/faqs'},

         { text: 'Strategic Plan', icon: 'mdi-file-document-multiple' },
         { text: 'Service Charter', icon: 'mdi-file-document-multiple' },



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