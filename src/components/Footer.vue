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
      class="indigo lighten-1 white--text text-center"
    >

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
          <v-col  class="text-center pl-10">
            <h1>Related Links</h1>
           <div class="text-center pl-10">
              <v-row>Commision for University</v-row>
            <v-row>Ministry of Education</v-row>
            <v-row>TVET CDACC</v-row>
            <v-row>KNQA</v-row>
            <v-row>KUCCPS</v-row>
            <v-row>KNEC</v-row>
            <v-row>NITA</v-row>
            <v-row>KICD</v-row>
            <v-row>KATTI</v-row>
           </div>
          </v-col>
          <v-col >
            <h1>Contact Us</h1>
            <v-row>Utaliii House 8th Floor, Utalii Street</v-row>
            <v-row>P.O. Box 35625 - 00100</v-row>
            <v-row>Phone:+254 20 239 2140</v-row>
            <v-row>Cell: +254 700 015 440</v-row>
            <v-row>Email:info@tveta.go.ke</v-row>
            <v-row>Web: www.tveta.go.ke</v-row>
          </v-col>
            <v-col >
            <h1>Location</h1>
            <v-row>
              <img src="https://maps.gstatic.com/mapfiles/embed/images/google4.png" style="width: 52px;">
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

      <v-card-text class="white--text">
        Copyright  {{ new Date().getFullYear() }} — <strong> TVETA | All Rights Reserved |</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
       selectedItem: 1,
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
    }),
  }
</script>