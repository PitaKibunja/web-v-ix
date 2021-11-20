<template>
<v-container fluid>
      <v-carousel height="600" cycle class="mt-0 pt-0" :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      
    >
    <v-img :src="item.src" contain  width="auto"></v-img>
    </v-carousel-item>
  </v-carousel>
  <v-card class="mx-4 mb-4" color="#508F40" style="position:absolute;float:right;top:75px;z-index:400">
    <v-card class="mx-auto" max-width="400" outlined>
          <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
       <v-badge
          color="#508F40"
          content="2"
        >
          <router-link to="/career" tag="span" style="cursor: pointer">
          Careers and Job Adverts
        </router-link>
       
        </v-badge>
        
      </v-btn>
      
    </v-card-actions>
    </v-card>
  </v-card>
  <v-card class="mx-4 my-4" dark color="primary" style="position:absolute;float:right;top:200px;z-index:400">
    <v-card class="mx-auto" max-width="400" outlined>
          <v-card-actions>
      <v-btn
        outlined
        rounded
       elevation="2"
       color="#FFCE66"
      
      
      >
        
           <v-badge
          color="#508F40"
          content="6"
        >
        <router-link to="/tenders" tag="span" style="cursor: pointer">
          TVET Authority Tenders
        </router-link>
        
        </v-badge>
      </v-btn>
      
    </v-card-actions>
    </v-card>
  </v-card>
 <!-- <v-card class="mx-10" style="position:absolute;float:right;top:75px;z-index:400">
        <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Careers
      </v-btn>
      
    </v-card-actions>
  </v-card>
<v-card>

 -->


  <div class="ma-2 mb-4">
    <LinkShortcut/>
  </div>

  <!-- Create the cards -->
    <!-- <UtilityLinks /> -->
    <v-divider></v-divider>

</v-container>

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
          
         
         { text: 'MIS', icon: 'mdi-login'},  
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
            src: 'https://i.ibb.co/zn3xqR9/DSC0383-1024x684.jpg',
          },
          {
            src: 'https://i.ibb.co/JsZLzB0/240577329-4168000269976500-5085128446927312642-n.jpg',
          },
          {
            src: 'https://i.ibb.co/YNjBb3B/239489643-4168000479976479-6619135501472665187-n.jpg',
          },
             {
            src: 'https://i.ibb.co/FB1XNjt/236983064-4162058043904056-7427814435797520698-n.jpg',
          },
             {
            src: 'https://i.ibb.co/rfLMx1M/203091261-3986897954753400-7696855567271664318-n.jpg',
          }
        ],
      }
    },
  }
</script>