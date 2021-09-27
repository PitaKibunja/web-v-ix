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
   
   

    <!-- <v-btn
      class="mx-2"
      fab
      dark
      small
      color="pink"
    >
      <v-icon dark>
        mdi-heart
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="indigo"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      color="teal"
    >
      <v-icon dark>
        mdi-format-list-bulleted-square
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="cyan"
    >
      <v-icon dark>
        mdi-pencil
      </v-icon>
    </v-btn>

    <v-btn
      class="mx-2"
      fab
      dark
      large
      color="purple"
    >
      <v-icon dark>
        mdi-android
      </v-icon>
    </v-btn> -->
  </div>
  
  
  <!-- <v-card-text>
    <v-spaceer></v-spaceer>
        <v-btn
          v-for="link in links"
          :key="link"
          class="  justify-space-between mt-2 mb-6 mx-16 primary--text"
          color="primary"
          icon
          
        >
        <div class="ml-10 pb-8 pt-8">
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
      </v-card-text> -->
</template>
<script>
// import UtilityLinks from './UtilityLinks.vue'
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