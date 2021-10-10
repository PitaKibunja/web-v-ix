<template>
    <v-container class="mt-8">
          <v-card elevation="2">
               
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Trainers/Assessors/Verifiers</h3>      
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
                    
            <v-divider></v-divider>
            <v-container fluid class="ma-2 pa-2">
                <p class="text-h6">Application for registration and Licensing of Trainers</p>
                <div class="d-flex justify-start ml-4 pa-2">
                    <p>
                        Section 23 of the TVET Act, 2013 requires that all TVET trainers are registered and licensed by the TVET Authority Board. The list of accredited trainers shall be posted on the Authority’s website and training providers shall be required to recruit only accredited trainers.
                        The Authority, therefore, invites qualified TVET trainers including those who had applied earlier to submit their applications for registration and licensing through our online registration platform. TVET trainers and industry practitioners and also invited to submit their applications as assessors and/ or verifiers for CBET programs available on our website. The duties and responsibilities of assessors and verifiers are as stated in CBETA Standards and guidelines derived from section 57(b) of TVET Act, 2013.
                    </p>
                </div>
                <p class="text-h6">Application Procedure</p>
                
                <div class="d-flex justify-start ml-4 pa-2">
                    <p>
                        1.Click on the link mis.tveta.go.ke <br/>
                        2.A page with Institution and Trainer/Assessor/Verifier  <br/>
                        3.For first time applicants, click register to create an account. For those registered and licensed under the old application process, kindly click on Existing <br/>
                        4.For new applicants, after creating an account, an email link will be sent to the personal email provided for activation. Click on the link to activate the account and set the password. <br/>
                        5.The portal will open a page with five areas to be filled. These include Personal Information, Contact Information, Education, Experience, Confirmation. Click, save, and continue after every step. <br/>
                        6.After the applicant gives consent that the information provided is factual, the applicant submits the information. <br/>
                        7.After submission, the applicant is automatically led to the licensing page. Select the area of licensing and then click on apply. <br/>
                        8.This opens up to the payment page. Click and pay the required amount <br/>
                        </p>                   
                </div>
                <p class="text-h6">Note: Penalty</p>
                <div class="d-flex justify-start ml-4">
                    <p>
                        Any person who contravenes the provisions of TVET Act, 2013 commits an offense and is liable on conviction to a fine of a sum not exceeding one million shillings or imprisonment for a term not exceeding three years or to both as provided for in sections 17(4), 22(4) and 56.
                    </p>
                </div>
                <p>In case of any challenge, write an email to support@tveta.go.ke</p>
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
          text: 'Trainers/Assessors/Verifiers',
          disabled: true,
          href: '/trainerreg',
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