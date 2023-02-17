<template>
  <div class="text-center">
    <v-spacer></v-spacer>
    <v-row class="ml-auto mr-auto" style="z-index:700">
      <div class="d-flex justify-center" v-for="link in links" :key="link">
        <v-col cols="auto">
          <v-btn class="mb-0" fab dark small elevation="2" color="#0082C6" :to="link.where">
            <v-icon size="25" dark>{{ link.icon }}</v-icon>
          </v-btn>
        </v-col>
        <div class="mt-5 text-wrap">
          <v-flex>{{ link.text }}</v-flex>
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
          { text: 'Institutions Register', icon: 'mdi-town-hall', where: '/Allinstitution' },
          { text: 'Trainers Register', icon: 'mdi-account-circle-outline',where:'/trainers' }, 
        { text: 'FAQs', icon: 'mdi-frequently-asked-questions' ,where:'/faqs'},

         { text: 'Strategic Plan', icon: 'mdi-file-document-multiple' ,where:'/strategic-plan'},
         { text: 'Service Charter', icon: 'mdi-file-document-multiple', where:'/service-charter' },
        


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