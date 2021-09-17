<template>
  <v-footer
    dark
    padless
  >
  <v-row>

  </v-row>
    <v-card
      flat
      tile
      class="dark lighten-1 white--text text-center"
    >
<v-divider></v-divider>
        <v-card
      class="d-flex justify-center mb-0"
      style="height:25%;"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >

      <v-card
        v-for="n in partners"
        :key="n"
        class="green pa-12"
        
      >
         <img src="../assets/2030.jpg" size="24px" style="width: 45%; height:50%;">
      </v-card>
    </v-card>
      <v-divider></v-divider>
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
        <v-divider></v-divider>
        <v-row>
           <v-col >
            <h4 class="pt-2">RELATED LINKS</h4>
            <div class="pl-5px">
                <div class="d-flex flex-column mb-6">
            <v-card
              v-for="n in links"
              :key="n"
              class="pa-2"
              tile>
              <router-link to="" style="">
                {{ n }}
              </router-link>
            </v-card>
            </div>
            </div>
          </v-col>
          <v-col class="pt-10">
            <h4 >CONTACT US</h4>
            <div class="pl-5px">
                <div class="d-flex flex-column mb-6">
            <v-card
              v-for="n in contacts"
              :key="n"
              class="pa-2"
              tile>
                {{ n }}
            </v-card>
            </div>
            </div>
          </v-col>
              <v-col >
                <h1>Location</h1>
                  <v-row>
                    <img src="../assets/logo.png" style="width: 52px;">
                  </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      <v-card-text class="white--text pt-10">
      Authority" means the Technical and Vocational Educational and Training Authority established under section 6 "Board" means the Technical and Vocational
Education and Training Board established under section
8 of this Act;
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="yellow white--text">
        Copyright  {{ new Date().getFullYear() }} — <strong> TVETA | All Rights Reserved |</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
       selectedItem: 1,
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