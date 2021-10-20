<template>
    <v-container class="mt-8">
          <v-card elevation="2">
               
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Institution Application</h3>      
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
                <p>The Authority accredits institutions and approves managers of institutions and new programmes.</p>
                <p class="text-h6">Business registration certificate</p>
                <div class="d-flex justify-start ml-4 pa-2">
                    <p>1. <a href="">Click Here</a> to obtain letter of no objection on the suitability of the name from TVETA <br/>
                     2.Register the Company or Business name with the Registrar of companies via <a href="">Ecitizen</a></p>
                </div>
                <p class="text-h6">The application process for Institution</p>
                <p>Steps for application for registration of a TVET institution:</p>
                <div class="d-flex justify-start ml-4 pa-2">
                    <p>
                        1.Click on the link <a href="mis.tveta.go.ke">mis.tveta.go.ke</a><br/>
                        2.A page with Institution and Trainer/Assessor/Verifier opens <br/>
                        3.For the first time institution application, click register. For those registered and licensed under the old application process, kindly click on Existing. <br/>
                        4.For new applicants, after creating an account, an email link will be sent to the institution email provided for activation. Click on the link to activate the account and set the password.<br/>
                        5.The portal will open a page with five areas to be filled.<br/>
                        6.Fill on General Information. Provide the specified information and upload the required documents. Save and Continue to the next stages on Infrastructure, Sanitation and Health, Management, Courses, and Training Staff details.<br/>
                        7.Confirmation is the last phase. Confirm your details, click on Declare and<br/>
                        8.A payment page opens up. Make the required payment.
                        </p>                   
                </div>
                <p>In case of any challenge, write an email to support@tveta.go.ke</p>
                <p class="text-h6">Acknowledgment</p>
                <p>
                    After making payment the applicant will complete a registration form in duplicate as evidence of having submitted their application. An acknowledgment letter will then be sent to the applicant
                </p>
                <p class="text-h6">Inspection and Assessment</p>
                <div class="d-flex justify-start ml-4">
                    <p class="text-body-1">
                        1.The institution will be scheduled for inspection and a Team of assessors will visit and inspect the institution for compliance with set standards. Download the assessment tool here <br/>
                        2.The assessors will prepare an inspection report which will be presented to TVETA Board<br/>
                    </p>
                </div>
                <p class="text-h6">Registration and Licensing</p>
                <p>Resolution of the Board based on evaluation of the inspection report shall be;</p>
                <div class="d-flex justify-start ml-4">
                    <p class="ml-4">
                        i.  Approve Registration and Licensing of the institution<br/>
                        ii. Reject the application<br/>
                        iii. Request the Institution to improve within a period of six months<br/>


                    </p>
                    
                </div>
                <p class="ml-2">
                        1.The applicant is notified on results of the TVETA Board resolution within 3 months from the date of submission of a fully compliant application documents<br/>
                        2.TVETA will issue a training License to qualified institutions and maintain a register of the institutions and programs approved.<br/>
                    </p>
                <p class="text-h6">Note</p>
                <p>TVETA will maintain a register of;</p>
                <div class="d-flex justify-start ml-4">
                    <p>
                        i. Registered and licensed institutions<br/>
                        ii. Ongoing registrations<br/>
                        iii. Institutions recommended for improvement<br/>
                    </p>
                </div>
                <p>At this point, the accreditation process is complete, and an institution will be issued with a registration certificate and training license.</p>
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
          text: 'Institution Application Process',
          disabled: true,
          href: '/reginstitutions',
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