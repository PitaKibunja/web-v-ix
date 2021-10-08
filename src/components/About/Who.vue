<template>
    <v-container class="mt-8">
          <v-card elevation="2" class="mb-2">
               
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Who we are</h3>      
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
                
                            <h5>Mission Statements</h5>      
                    </div>
                    </v-row>
                    </v-card-title>
                    <v-divider></v-divider>
                <v-card
                        class="d-flex justify-space-between mb-6 pt-4"
                        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                        flat
                        tile
                        >
                        
                        <v-card
                            v-for="n in statements"
                            :key="n"
                            class="d-flex justify-center mb-1 ml-4  pt-2 pa-1 ma-1"
                            elevation="2"
                            tile
                            
                        >
                        <v-card-title>
                            
                        <v-row cols="12 " class="d-flex justify-center mb-1   pt-2">
                            <h5>{{ n.text }}</h5> 
                            
                    </v-row>     
                     
                    <v-row cols="12 " class="d-flex justify mb-1  pt-2">
                            {{ n.content }}
                    </v-row>
                    </v-card-title>
                        </v-card>
                        </v-card>
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
          text: 'Who we are',
          disabled: true,
          href: '/whoweare',
        }
      ],
      statements:[
          {
              text:'Vision',
              content:'A competitive market driven TVET system delivering competent workforce for sustainable development.'
          },{
              text:'Mission',
              content:'To develop a TVET system that meets national needs and aspirations.'
          },
          {
              text:'Core Values',
              content:'Integrity ProfessionalismAccountabilityPublic Participation Team work Efficiency '
          }

      ]
      }
    },
  }
</script>