<template>
  <v-container class="mt-8">
    <v-card elevatio="2" class="mb-2">
      <v-card-title class="ttitle white--text">
        <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
          <div class="font-weight-medium">
            <h3>Our Leadership</h3>
          </div>
        </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <div class="">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
      </div>
      <v-divider></v-divider>
      <v-container fluid>
        <v-card>
          <v-card-title class="ttitle white--text">
                <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
                  <div class="font-weight-medium">
                    <h5>Board Members</h5>
                  </div>
                </v-row>
          </v-card-title>
          <v-divider></v-divider>
        </v-card>
        
        <v-card class="bady white--text d-flex justify-space-between mb-1 pt-4" :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'" flat tile>
          <v-row cols="12" class="d-flex justify-center mb-1 pt-2">
          
            <v-card v-for="n in members" :key="n" class="pa-1 ma-1" elevation="4" tile>
              
              <div class="text-center">
                <v-card @click.stop="dialog = true" width="230" height="400" v-bind="attrs" v-on="on" class="ma-4 pa-3">
                <v-img :src="n.img"></v-img>
                <v-card-text>{{ n.name }}<br/><br/>{{ n.position }}</v-card-text>
                
              </v-card>
              </div>
            </v-card>
             <v-dialog
                      v-model="dialog"
                      max-width="500"
                    >
                   <v-container fluid>
                        <v-card class="ma-2 pa-2">
                        <v-card-title class="text-h5 grey lighten-4">
                            <div class="d-flex justify-end">
                               john
                            </div>
                        </v-card-title>
                        <v-img src="../../assets/board.png" width="200" class="ma-2 pa-2"></v-img>
                         <div class="d-flex justify-start">
                        <v-card-text>
                          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </v-card-text>
                         </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            <v-icon >mdi-close</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                   </v-container>
                    </v-dialog>
          </v-row>
        </v-card>
     
        <v-card>
          <v-card-title class="bady white--text">
                <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
                  <div class="font-weight-medium">
                    <h5>Management</h5>
                  </div>
                </v-row>
          </v-card-title>
          <v-divider></v-divider>
        </v-card>
        
        <v-card class="supu white--text d-flex justify-space-between mb-6 pt-4"  flat tile>
          <v-row cols="12" class="d-flex justify-center mb-1 pt-2">
          
            <v-card v-for="n in 8" :key="n" class="pa-1 ma-1" elevation="4" tile>
              
              <div class="text-center">
                <v-card @click.stop="dialog = true" width="230" v-bind="attrs" v-on="on" class="ma-4 pa-3">
                <v-img src="../../assets/board.png"></v-img>
                <v-card-text class="pt-1 mb-0">John Doe</v-card-text>
                <v-card-text >Department</v-card-text>
              </v-card>
              </div>
            </v-card>
             <v-dialog
                      v-model="dialog"
                      max-width="500"
                    >
                   <v-container fluid>
                        <v-card class="ma-2 pa-2">
                        <v-card-title class="text-h5 grey lighten-4">
                            <div class="d-flex justify-end">
                               john
                            </div>
                        </v-card-title>
                        <v-img src="../../assets/board.png" width="200" class="ma-2 pa-2"></v-img>
                         <div class="d-flex justify-start">
                        <v-card-text>
                          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </v-card-text>
                         </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            <v-icon >mdi-close</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                   </v-container>
                    </v-dialog>
          </v-row>
        </v-card>
        <v-divider></v-divider>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        members:[
          {
            name:'Jane Doe',
            img:'https://ibb.co/yhm7JXy',
            position:'TVET Authority Chairperson',
            details:'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          },  {
            name:'Dr. Margaret Wawuda Mwakima',
            img:'https://i.ibb.co/ymC6m6c/Dr-Margaret-Mwakima-2.jpg',
            position:'PS, State Department of Vocational and Technical Training (VTT) - Ministry of Education',
            details:'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          },  {
            name:'CS. Dr. Davidson Mghanga Mwaisaka',
            img:'https://i.ibb.co/GPqqSGK/DR-DAVIDSOM-MGHANGA-MWAISAKA-PASSPORT-PHOTO-2.jpg',
            position:'Member',
            details:'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          },  {
            name:'Mr. Sammy Milgo',
            img:'https://i.ibb.co/Jyk8Fs7/Milgo.jpg',
            position:'Member',
            details:'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          },  {
            name:'Mrs. Jane Wambugu',
            img:'https://i.ibb.co/b1NMPF5/Jane.jpg',
            position:'Member',
            details:'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          },  {
            name:'Mr. Burua Sanga Shumaa',
            img:'https://i.ibb.co/XSFdz3t/Burua-sanga-n.jpg',
            position:'Member',
            details:'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          },  {
            name:'Esther Gacicio',
            img:'https://i.ibb.co/5R7NrGh/Esther-Gacicio-917x1024.jpg',
            position:'Member',
            details:'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          },  {
            name:'Susan Aletia',
            img:'https://i.ibb.co/KKC2HK2/Susan-Aletia-1-954x1024.jpg',
            position:'Member',
            details:'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
          }

        ],
          dialog: false,
          items: [
        {
          text: 'About us',
          disabled: false,
          href: '/',
        },
        {
          text: 'Leadership',
          disabled: true,
          href: '/management',
        }
      ],
        
      }
    },
  }
</script>