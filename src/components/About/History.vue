<template>
    <v-container class="mt-8">
          <v-card elevation="2" class="mb-2">
               
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>History</h3>      
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
             <v-container>
            <v-card class="ma-4 pa-4" >
                <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                <v-card width="200">
                <v-card-title >
                    <v-img class="ma-1" src="../../assets/tveta_logo.png"></v-img>
                </v-card-title>
                </v-card>
                </v-row>
                
                    <p class="text--primary size-1rem text-justify pt-8">
                        The Technical and Vocational Education and Training Authority (TVETA) is a public corporate agency established under the Technical and Vocational Education and Training (TVET) Act No. 29 of 2013 to regulate and coordinate training in the country through licensing, registration and accreditation of programs, institutions andtrainers. Section 7 of the Act, 2013 gives the powers and functions of the Authority to regulate and coordinate training; inspect, license and register and accredit training institutions; accredit and inspect programmes and courses; promote access and relevance of training programmes; determine the national technical and vocational training objectives; assure quality and relevance in programmes of training among other functions.

The Authority is governed by a Board appointed by the Cabinet Secretary responsible for Technical and Vocational Education and Training while the day to day affairs are managed by the Board’s Secretariat, headed by a Director General. Prior to the establishment of TVETA, a Directorate of Technical Accreditation and Quality Assurance and Directorate of Youth Training had been established to undertake inspection and registration of TVET institutions with the purview of the mandate of the Ministries of Higher Education Science and Technology and Youth Affairs and Sports respectively.

The Kenyan TVET sector comprises of National Polytechnics, Technical Training Institutes (TTIs), Vocational Training Centres (VTCs), Technical Trainer Colleges and any other category specified by the Cabinet Secretary, Ministry of Education Science and Technology.
                    </p>
               
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
          text: 'History',
          disabled: true,
          href: '/history',
        }
      ]
      }
    },
  }
</script>