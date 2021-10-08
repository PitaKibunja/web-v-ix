<template>
    <v-container class="mt-8">
          <v-card elevation="2" class="mb-2">
               
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Our Leadership</h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>

             <div>
                    <v-breadcrumbs :items="items">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
            </div>
                   <v-divider></v-divider>
                   <v-container fluid>
                      <v-card>
                                    <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h5>Board Members</h5>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
                      </v-card>
                     <v-card
                        class="d-flex justify-space-between mb-6 pt-4"
                        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                        flat
                        tile
                        >
                        <v-row cols="12 " class="d-flex justify-center mb-1  pt-2">
                        <v-card
                            v-for="n in 8"
                            :key="n"
                            class="pa-1 ma-1"
                            elevation="4"
                            tile
                        >
                            <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card
          
          v-bind="attrs"
          v-on="on"
          class="ma-4 pa-3"
        >
          <v-img src="../../assets/board.png" width="200"></v-img>
          <v-card-text class="pt-1 mb-0">John Doe</v-card-text>
          <v-card-text>Position</v-card-text>
        </v-card>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-4">
            <div class="d-flex justify-end">
                John Doe
            </div>
          
        </v-card-title>
<v-card-actions class="justify-end">
              <v-btn
                text
                class="pt-n4"
                @click="dialog.value = false"
              > <v-icon >mdi-close</v-icon></v-btn>
            </v-card-actions>
                     <v-divider
            class="mx-4"
            vertical
            ></v-divider>
        <v-card-text>
          <v-img src="../../assets/board.png" width="200"></v-img>
   
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae, optio unde velit libero repudiandae nesciunt, delectus ex iure odit similique beatae, quia vel debitis in aliquam quasi sit veniam.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
                        </v-card>
                        </v-row>
                        </v-card>
                   </v-container>
                    <v-container fluid>
                      <v-card>
                                    <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h5>Management Team</h5>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
                      </v-card>
                     <v-card
                        class="d-flex justify-space-between mb-6 pt-4"
                        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                        flat
                        tile
                        >
                        <v-row cols="12 " class="d-flex justify-center mb-1  pt-2">
                        <v-card
                            v-for="n in 8"
                            :key="n"
                            class="pa-1 ma-1"
                            elevation="2"
                            tile
                        >
                            <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-card
          
          v-bind="attrs"
          v-on="on"
          class="ma-4 pa-4"
        >
          <v-img src="../../assets/board.png" width="200"></v-img>
          <v-card-text class="pt-1 mb-0">John Doe</v-card-text>
          <v-card-text>Position</v-card-text>
        </v-card>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-4">
            <div class="d-flex justify-end">
                John Doe
            </div>
          
        </v-card-title>
<v-card-actions class="justify-end">
              <v-btn
                text
                class="pt-n4"
                @click="dialog.value = false"
              > <v-icon >mdi-close</v-icon></v-btn>
            </v-card-actions>
                     <v-divider
            class="mx-4"
            vertical
            ></v-divider>
        <v-card-text>
          <v-img src="../../assets/board.png" width="200"></v-img>
   
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae, optio unde velit libero repudiandae nesciunt, delectus ex iure odit similique beatae, quia vel debitis in aliquam quasi sit veniam.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
                        </v-card>
                        </v-row>
                        </v-card>
                   </v-container>

          </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
          dialog: false,
          items: [
        {
          text: 'About us',
          disabled: false,
          href: '/',
        },
        {
          text: 'Leadership',
          disabled: false,
          href: '/management',
        }
      ],
        Questions: [
          {
            quiz: 'What is the TVET MIS',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.', 
          
          },{
            quiz: 'How to Register an exsisting Institution?',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.',
            
          },{
            quiz: 'How to download Certificate from MIS Platform',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.',
            
          },{
            quiz: 'How to handle Tickets on MIS platform',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.',
            
          },{
            quiz: 'How to change Institution Location from the MIS',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.',
            
          }
        ],
      }
    },
  }
</script>