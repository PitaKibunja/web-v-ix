<template>
<v-container fluid>
      <v-carousel height="495" cycle class="mt-0 pt-0" :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
     
      :src="item.src"
    ></v-carousel-item>
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
            src: 'https://i.ibb.co/3cwypTW/Dku.jpg',
          },
          {
           src: 'https://i.ibb.co/qnzLTQr/iso.jpg',
          },
          {
            src: 'https://www.tveta.go.ke/wp-content/uploads/2021/08/IMG_0315-scaled.jpg',
          },
          {
            src: 'https://www.tveta.go.ke/wp-content/uploads/2021/02/DSC0093-scaled.jpg',
          },
        ],
      }
    },
  }
</script>