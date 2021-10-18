<template>
  <v-container fluid>
    <v-footer dark>
      <v-row cols="12 " class="d-flex justify-start mb-1   pt-2">
        <v-col cols="8">
          <v-row>
            <v-col>
              <v-container class="mx-auto">
                
                  <h4 class="pt-2">RELATED LINKS</h4>
               
                 <v-list-item>
                  <v-list-item-content text-color="white">
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>Ministry of Education</v-list-item-title></router-link>
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>Commission for University</v-list-item-title></router-link>
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>TVET CDACC</v-list-item-title></router-link>
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>KUCCPS</v-list-item-title></router-link>
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>NITA</v-list-item-title></router-link>
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>KNQA</v-list-item-title></router-link>
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>KNEC</v-list-item-title></router-link>
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>KICD</v-list-item-title></router-link>
                    <router-link class="pa-1 ma-1" to="add"><v-list-item-title>KATTI</v-list-item-title></router-link>
                  </v-list-item-content>
                </v-list-item>
              </v-container>
            </v-col>    
            <v-col>
              <v-container>
                        
                  <h4 class="d-flex justify-start">CONTACT US</h4>
                 <v-list-item>
                  <v-list-item-content>
                   <v-list-item-title class="pa-1 ma-1">Utaliii House 8th Floor, Utalii Street</v-list-item-title>
                   <v-list-item-title class="pa-1 ma-1">P.O. Box 35625 - 00100</v-list-item-title>
                    <v-list-item-title class="pa-1 ma-1">Phone:+254 20 239 2140</v-list-item-title>
                    <v-list-item-title class="pa-1 ma-1">Cell: +254 700 015 440</v-list-item-title>
                    <v-list-item-title class="pa-1 ma-1">Web: www.tveta.go.ke</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
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