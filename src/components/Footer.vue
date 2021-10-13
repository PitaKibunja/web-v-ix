<template>
  <v-container fluid>
    <v-footer dark>
      <v-row cols="12 " class="d-flex justify-start mb-1   pt-2">
        <v-col>
              <v-card 
               class=""
                :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                flat
                tile
                >
                <v-row>
             
                                <v-card
                  v-for="resource in resources"
                  :key="resource.heading"
                  class="d-flex justify-space-between mb-6 pa-4"
                  flat
                  tile
                  dark
                  >
                    <h4 class="pt-2">{{ resource.heading }}</h4>
                    <v-card
                    v-for="info in resource.info"
                    :key="info.text"
                    class="pa-2"
                    dark
                    tile
                    >
                        <router-link to="">
                            {{info.text }}
                        </router-link>
                    </v-card>
                  </v-card>
                
                </v-row>
        
              </v-card>
            </v-col>
        <v-col>
          <p>Location goes here</p>
          <div style="width: 100%"><iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=Utalii%20House+(TVET%20Authority)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="http://www.gps.ie/">gps devices</a></iframe></div>
        </v-col>
      </v-row>
    </v-footer>
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