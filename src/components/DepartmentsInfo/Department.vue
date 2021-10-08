<template>
    <v-container class="mt-8">
          <v-card elevation="2">
               
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Compliance and Enforcement</h3>      
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
            <v-card class="ma-4 pa-4">
                <h4 class="d-flex justify-center">Compliance and Enforcement department</h4>
                 <p class="text-justify pt-8">
                     The TVET Authority through its Compliance and Enforcement department carries 
                     out periodic audits to institutions to ensure that, once an institution is 
                     accredited, it continuously meets the same standards. It Categorizes and schedules
                      institutions for standards compliance assessments in liaison with National and 
                      county governments.
                 </p>
                 <p class="d-flex align-start ">
                        1. Categorize and schedule institutions for compliance assessments.<br>
                        2. Inspect institutions for compliance with set TVETA standards and guidelines.<br>
                        3. Co-ordinate evaluation of compliance assessment reports.<br>
                        4. Liaise with National and County Governments on compliance with TVETA standards.<br>
                        5. Co-ordinate field offices and liaise with field officers on mapping of TVET institutions.<br>
                        6. Monitor advertisement by TVET institutions in print and electronic media for enforcement and compliance with standards.<br>
                        7. Update TVET database for compliance.<br>
                        8. Enforce industrial attachment and internship policies as per the TVET Act, 2013.<br>
                        9. Monitor examinations by various examining bodies for standards compliance.<br>
                        10. Vetting of foreign examining bodies for compliance with TVETA standards.<br>
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
          items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Compliance',
          disabled: true,
          href: '/department',
        }
      ],
        departments: [
          {
            dep: 'Accreditation',
            mandate:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.', 
          
          }
        ],
      }
    },
  }
</script>