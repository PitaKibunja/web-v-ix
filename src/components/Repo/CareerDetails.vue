<template>
    <v-container class="mt-8">
          <v-card elevation="2">
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3> Career Details</h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
                   <div>
               
                            <v-breadcrumbs :items="linkss">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
    
            </div>
            <v-divider></v-divider>
            <v-container fluid no-gutters>
               <v-row  no-gutters class="d-flex justify-start">
                  <v-col cols="9" no-gutters>
                     <v-container>
                        <v-card >
                           <v-card-title class="bady">
                              <v-row  class="bady white--text d-flex justify-start mb-1  pt-1">
                                 <div class="font-weight-medium ma-1 pa-1">
                              
                              <h4> Assistant Manager – Digital Communication (#AM-SPIA-21)</h4> <h3></h3>    
                                 </div>
                                 </v-row>
                           </v-card-title>
                           <v-divider></v-divider>
                   <v-container fluid>
                <p class="text-h6">Job Summary</p>
                <div class="d-flex justify-start ml-4 pa-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero placeat explicabo quae sed obcaecati unde, sapiente, modi natus excepturi, ut tempore molestias enim. Corporis magni inventore ullam delectus amet. Autem.</p>
                </div>
                <p class="text-h6">Key Responsibilities:Roles and responsibilities</p>
                <div class="d-flex justify-start ml-4 pa-2">
                    <p>
                        1.Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                        2.Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                        3.Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                        4.Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                        5.Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>
                        </p>                   
                </div>
                <p class="text-h6 ">Academic Qualifications</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, repellendus? Nisi placeat blanditiis consequatur tenetur architecto. Odit voluptatibus impedit magnam. Suscipit, doloribus veritatis placeat quis nesciunt cupiditate veniam itaque corporis.
                </p>
                <p class="text-h6">Professional Qualifications Required Certifications/Trainings</p>
                <div class="d-flex justify-start ml-4">
                    <p class="text-body-1">
                        1.Phasellus vulputate in eros eu gravida. Sed eleifend odio<br/>
                        2.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices<br/>
                    </p>
                </div>
                <p class="text-h6">Relevant Work experience Required</p>
                <p>In mi quam, placerat sit amet sodales vel, lobortis sit amet ligula. Donec nec volutpat felis. Vestibulum sed neque pharetra, eleifend metus a, elementum tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et semper sapien.</p>
             <p class="text-h6">Job Application Guidelines</p>
                <div class="d-flex justify-start ml-4">
                    <p class="text-body-1">
                        Quisque at pharetra elit. Pellentesque mollis facilisis metus, eu interdum metus consequat ac. Mauris ullamcorper velit ex, ut iaculis velit mattis quis. Sed in interdum justo, sit amet suscipit nisl. In porttitor cursus velit sed elementum. Aenean id posuere metus. Nulla lacinia turpis id placerat gravida. Fusce luctus risus aliquet leo viverra, quis gravida arcu cursus.
                    </p>
                </div>
                <p class="text-h6">Resources (Downloadable <v-icon>mdi-download</v-icon>) </p>
                <div class="d-flex justify-start ml-4">
                    <p>
                        1.<router-link to="/">Excel template</router-link> <br/>
                        2.<router-link to="/">Form template</router-link><br/>
                    </p>
                </div>
               
            </v-container>
                        </v-card>
                     </v-container>
                  </v-col>
                  <v-col>
                     <v-container fluid >
                        <v-card
                     class=" mx-auto"
                     max-width="300"
                     tile
                  >
                     <v-list class="bady">
                  
                  <h3 class="white--text ml-2 d-flex justify-center"> More Careers</h3>  
                  <v-divider></v-divider>
                  <v-list-item-group
                  class="supu"
                  color="primary"
                  >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content >
            <router-link :to="item.link" style="text-decoration: none; color: inherit;"><v-list-item-title class="black--text" v-text="item.text"></v-list-item-title></router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
                     </v-container>
                  </v-col>
               </v-row>
            </v-container>
          </v-card>
    </v-container>
</template>
<script>
export default {
   data() {
      return{
          selectedItem: 1,
      items: [
        { text: 'Assistant Director-ICT', link: '/careerdetails' },
        { text: 'HR-Intern', link: '/careerdetails'},
        { text: 'ICT-Officer', link: '/careerdetails' },
        { text: 'Accreditation-Officer', link: '/careerdetails' },
        { text: 'Admin-Intern', link: '/careerdetails' },
        { text: 'Admin', link: '/careerdetails' },
      ],
          linkss: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Careers',
          disabled: false,
          href: '/career',
        } , {
          text: 'Job Details',
          disabled: true,
          href: '/careerdetails',
        }
      ],
      }
      
   },
}
</script>