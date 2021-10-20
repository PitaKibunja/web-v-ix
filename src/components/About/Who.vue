<template>
    <v-container class="mt-8">
          <v-card elevation="2" class="mb-2">
               
            <v-card-title class="white--text custom-color">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ma-1  pt-2">
                    <div class="font-weight-medium">
                      <p class="font-weight-medium mb-0">
                          Who we are 
                      </p>
                    
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
            
              <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <v-card
          class="body-color pa-2"
          outlined
          tile
        >
        <v-card-title class="white--text custom-color">
                 <v-row cols="12 " class="  d-flex justify-center mb-1 ma-1  pt-2">
                    <div class="font-weight-medium">
                      <p class="font-weight-medium mb-0">
                          Mission Statements
                      </p>
                    
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>

                                <v-container fluid class="ma-4" >
                                <v-card
                        class=" d-flex justify-space-between mb-6 pt-4 "
                        :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
                        flat
                        tile
                        >
                        
                        <v-card
                            v-for="n in statements"
                            :key="n"
                            class="#0082C6 d-flex justify-center  pa-1 ma-1"
                            elevation="2"
                            tile
                            
                            
                        >
                        <v-container fluid no-gutters>
                          <v-card-title >
                            
                        <v-row color="grey darken-2" cols="12 " class="d-flex justify-center pa-4">
                            <h5>{{ n.text }} <v-divider></v-divider> </h5> 
                            
                    </v-row>     
                    </v-card-title>
              <v-container>
                      
                             <v-row cols="12 " class="yellow lighten-4 d-flex text-justify ma-1  pa-1">
                            <p>{{ n.content }}</p>
                    </v-row>
                    
              </v-container>
                        </v-container>
                        
                        </v-card>
                        
                        </v-card>
                      </v-container>
        </v-card>
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-card
          class="body-color mb-8"
          height="482"
          
        >
         <v-divider></v-divider>
            <v-card-title class="custom-color white--text mb-2">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ma-1  pt-2">
                    <div class="font-weight-medium">
                      <p class="font-weight-medium mb-0">
                          Locations
                      </p>
                    
                    </div>
                    </v-row>
                    
            </v-card-title>
            <v-divider></v-divider>
                 <template>
  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="location in locations"
      :key="location"
      class="pa-1 ma-1"
    >
      <v-expansion-panel-header>{{ location.location }}</v-expansion-panel-header>
      <v-expansion-panel-content>
          {{ location.details }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

</template>
        </v-card>
      </v-col>
    </v-row>
  
   <v-divider></v-divider>
      <v-card class="body-color">
    <v-card-title class="white--text custom-color ">
                        <v-row cols="12 " class="d-flex justify-center mb-1 ma-1  pt-2">
                            <div class="font-weight-medium">
                
                            <h5>Quality Policy Statements</h5>      
                    </div>
                    </v-row>
                    </v-card-title>
                    <v-divider></v-divider>
                    <div class="pt-2">
                      <v-divider></v-divider>
                    </div>
                    <v-container fluid no-gutters>
                                   <v-container class="white--text">
                      
                             <v-row cols="12 " class="d-flex text-justify ma-1  pa-1">
                            <p>
                              The Technical and Vocational Education and Training Authority (TVETA) is committed to efficient and effective delivery on its mandate of regulating and coordinating TVET training to assure its quality and relevance.
TVETA shall comply with the TVET Act 2013 and all other applicable statutory provisions and continually improve its QMS based on the requirements of ISO 9001:2015, customer feedback and appropriate international best practices.
TVETA shall ensure that this quality policy is communicated, understood and applied within the Authority. and that, together with established quality objectives, are reviewed annually.
                            </p>
                    </v-row>
                    
              </v-container>
                    </v-container>
  </v-card>
      <v-card class="body-color">
      <v-card-title class="white--text custom-color">
                        <v-row cols="12 " class="d-flex justify-center mb-1 ma-1  pt-2">
                            <div class="font-weight-medium">
                
                            <h5>Mandate</h5>      
                    </div>
                    </v-row>
                    </v-card-title>
                    <v-divider></v-divider>
                    <div class="pt-2">
                      <v-divider></v-divider>
                    </div>
                    <v-container fluid no-gutters class="white--text">
                                   <v-container>
                      
                             <v-row cols="12 " class="d-flex text-justify ma-1  pa-1">
                                <p>
                                  The TVET Act 2013 prescribes the functions of the Authority shall be to:
                                </p>
                                <p>
                                  (a) Regulate and coordinate training under TVET Act,<br/>
                                  (b) Accredit and inspect programmes and courses;<br/>
                                  (c) Advice and make recommendations to the Cabinet Secretary on all matters related to training;<br/>
                                  (d) Determine the national technical and vocational training objectives;<br/>
                                  (e) Promote access and relevance of training programmes within the framework of the overall national socio-economic development plans and policies;<br/>
                                  (f) Prescribe the minimum criteria for admission to training institutions and programmes in order to promote access, equity and gender parity.<br/>
                                  (g) Recognize and equate qualifications awarded by local or foreign technical and vocational education institutions’ in accordance with the Standards and guidelines set out by the Authority from time to time;<br/>
                                  (h) Develop plans, and guidelines for the effective implementation of the provisions of TVET Act;<br/>
                                  (i) Establish a training system which meets the needs of both the formal and informal sectors as provided under TVET Act;<br/>
                                  (j) Collect, examine and publish information relating to training;<br/>
                                  (k) Inspect, license, register and accredit training institutions;<br/>
                                  (1) Advise on the development of schemes of service for trainers;<br/>
                                  (m) Assure quality and relevance in programmes of training;<br/>
                                  (n) Liaise with the national and- county governments and with the public and the private sector on matters relating to training;<br/>
                                  (O) Undertake, or cause to be undertaken, regular monitoring, evaluation and inspection of training and institutions to ensure compliance with set standards and guidelines;<br/>
                                  (p) Mobilize resources for development of training;<br/>
                                  (q) Ensure the maintenance of standards, quality and relevance in all aspects of training, including training by or through open, distance and electronic learning;<br/>
                                  (r) Approve the process of introduction of new training programmes and review existing programmes in Technical and Vocational Education and Training Board institutions;<br/>
                                </p>
                    </v-row>
                    
              </v-container>
                   </v-container>
                <v-divider></v-divider>
                
      </v-card>
          </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
          dialog: false,
          locations:[
            {
              location:'Nairobi',
              details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.'
            }  ,{
              location:'Mombasa',
              details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.'
            } , {
              location:'Kisumu',
              details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.'
            }, {
              location:'Eldoret',
              details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.'
            }
          ],
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
              content:'Integrity,Professionalism, Accountability, Public Participation and Team work Efficiency'
          }

      ]
      }
    },
  }
</script>
<style scoped>
.custom-color {
  background-color: #00547F;
}
.body-color{
  background-color:#508F40;
}
</style>