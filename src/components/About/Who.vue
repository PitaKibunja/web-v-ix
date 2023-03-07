<template>
    <v-container class="mt-8">
          <v-card elevation="2" class="mb-2">
            <v-card-title class="white--text ttitle">
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
          class="supu  mb-8 ma-2"
          outlined
          tile
          height="auto"

        >
        <v-card-title class="white--text body-color">
                 <v-row cols="12 " class="  d-flex justify-center mb-1 ma-2">
                    <div class="font-weight-medium">
                      <p class="font-weight-medium mb-0">
                          Mission Statements
                      </p>
                    
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>

                                <v-container fluid class="ma-0.5" >

                        
                        <v-card
                            v-for="n in statements"
                            :key="n"
                            class="d-flex justify-center  pa-0.5 ma-1"
                            elevation="2"
                            tile
                            
                            
                        >
                        <v-container fluid no-gutters>
                          <v-card-title >
                            
                        <v-row color="grey darken-2" cols="12 " class="d-flex justify-center pa-3">
                            <h5>{{ n.text }} <v-divider></v-divider> </h5> 
                            
                    </v-row>     
                    </v-card-title>
              <v-container>
                      
                             <v-row cols="12 " class="d-flex text-justify ma-1  pa-1">
                            <p>{{ n.content }}</p>
                    </v-row>
                    
              </v-container>
                        </v-container>
                        
                        </v-card>
                        
                        
                      </v-container>
        </v-card>
      </v-col>
      <v-col
        cols="6"
        md="4"
        
      >
        <v-card
          class="supu mb-8"
          height="auto"
          
        >
         <v-divider></v-divider>
            <v-card-title class="body-color white--text mb-2">
                 <v-row cols="12 " class="d-flex justify-center mb-1">
                    <div class="font-weight-medium">
                      <p class="font-weight-medium mb-0">
                          Locations
                      </p>
                    
                    </div>
                    </v-row>
                    
            </v-card-title>
            <v-divider></v-divider>
            <template>
  <v-expansion-panels focusable v-model="openPanelIndex" class="pa-1">
    <v-expansion-panel
      v-for="(location, index) in locations"
      :key="index"
      class="pa-0.5"
      max-width="200"
    >
      <v-expansion-panel-header>{{ location.area }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card elevation="4">
          <v-card-text class="text-justify">
            <v-list-item
              one-line
              v-for="address in location.list"
              :key="address.house"
            >
              <v-container>
                <v-list-item-content class="pa-0 ma-0">
                  <v-list-item-title class="text-wrap">{{ address.house }}</v-list-item-title>
                  <v-list-item-title>{{ address.box }}</v-list-item-title>
                  <v-list-item-title>{{ address.phone }}</v-list-item-title>
                  <v-list-item-title>{{ address.cell }}</v-list-item-title>
                  <v-list-item-title>{{ address.email }}</v-list-item-title>
                </v-list-item-content>
              </v-container>
            </v-list-item>
          </v-card-text>
        </v-card>
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
        openPanelIndex: 0, // set the first panel to be open by default
          locations:[
           {area:'Nairobi',list:[
          {house:'Utaliii House 8th Floor, Utalii Street'},
          {box:'P.O. Box 35625 - 00100'},
          {phone:'Phone:+254 20 239 2140'},
          { cell: 'Cell: +254 700 015 440' },
          {email:'Email: info@tveta.go.ke'},
          {web:'Web: www.tveta.go.ke'},
        ]},
        {area:'Kisumu',list:[
          {house:'Kenya Re Insurance building 2nd Floor Wing B, Oginga Odinga Street'},
          {box:'P.O. Box 35625 - 00100'},
          {phone:'Phone:+254 20 239 2140'},
          { cell: 'Cell: +254 700 015 440' },
          {email:'Email: info@tveta.go.ke'},
          {web:'Web: www.tveta.go.ke'},
        ]},
        {area:'Eldoret',list:[
          {house:'KVDA Plaza 7th Floor Southern Wing, Oloo street'},
          {box:'P.O. Box 35625 - 00100'},
          {phone:'Phone:+254 20 239 2140'},
          { cell: 'Cell: +254 700 015 440' },
          {email:'Email:info@tveta.go.ke'},
          {web:'Web: www.tveta.go.ke'},
        ]}, 
         {area:'Mombasa',list:[
          {house:'NSSF building Ground Floor, Nkurumah Road'},
          {box:'P.O. Box 35625 - 00100'},
          {phone:'Phone:+254 20 239 2140'},
           { cell: 'Cell: +254 700 015 440' },
           {email:'Email:info@tveta.go.ke'},
          {web:'Web: www.tveta.go.ke'},
        ]},
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