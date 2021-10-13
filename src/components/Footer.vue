<template>
<v-container fluid>
  <v-footer dark>
    <v-card
      class="d-flex justify-space-between mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        v-for="resource in resources"
        :key="resource.heading"
        class="pa-4"
        flat
        tile
      >
       <h4 class="pt-2">{{ resource.heading }}</h4>
        <v-card
              v-for="info in resource.info"
              :key="info.text"
              class="pa-2"
              tile>
              <router-link to="">
                {{info.text }}
              </router-link>
            </v-card>
      </v-card>
      
    </v-card>
    <v-divider class="ml-8" vertical></v-divider>
    <v-container>
       <v-card>
        <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Location</h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
     </v-card>
    </v-container>
  </v-footer>
      <v-card-text class="d-flex justify-center" color="#FFCE66">
          Copyright {{ new Date().getFullYear() }} — <strong> TVETA | All Rights Reserved |</strong>
        </v-card-text>
</v-container>
</template>
<script>
  export default {
    data: () => ({
       selectedItem: 1,
       resources:[
          {heading:'RELATED LINKS',info:[
          {text: 'Commission for University',linker:'/whoweare'},
          {text:'Ministry of Education',linker:'/management'},
          {text:'TVET CDACC',linker:'/history'},
          {text:'KNQA',linker:'/history'},
          {text:'KUCCPS',linker:'/history'},
          {text:'KNEC',linker:'/history'},
          {text:'NITA',linker:'/history'},
          {text:'KICD',linker:'/history'},
          {text:'KATTI',linker:'/history'},
        ]},   
        
        {heading:'CONTACT US',info:[
          {text: 'Utaliii House 8th Floor, Utalii Street',linker:'/whoweare'},
          {text:'P.O. Box 35625 - 00100',linker:'/management'},
          {text:'Phone:+254 20 239 2140',linker:'/history'},
          {text:'Cell: +254 700 015 440',linker:'/history'},
          {text:'Web: www.tveta.go.ke',linker:'/history'},
        ]}
        
       ],
       links:[
          'Commission for University',
          'Ministry of Education',
          'TVET CDACC',
          'KNQA',
          'KUCCPS',
          'KNEC',
          'NITA',
          'KICD',
          'KATTI'
       ],
       contacts:[
         'Utaliii House 8th Floor, Utalii Street',
         'P.O. Box 35625 - 00100',
         'Phone:+254 20 239 2140',
         'Cell: +254 700 015 440',
         'Email:info@tveta.go.ke',
         'Web: www.tveta.go.ke'
       ],
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      alignments: [
        'start',
        'center',
        'end',
      ],
      partners:[
        '2030.jpg',
        'unevoc.jpg',
        'hof.png'
      ]
    }),
  }
</script>