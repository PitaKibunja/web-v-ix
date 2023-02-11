<template>
    <v-container class="mt-8">
          <v-card elevation="2">
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">

                 <h3>Open Career Opportunities</h3>
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

                <v-card dense class="supu">
                    <v-divider></v-divider>
                     <v-card-actions  v-for="n in jobs" :key="n.jref" >
                         <v-container fluid >

                             <v-card elevation="2" dense color="grey lighten-5" class="d-flex justify-center " outlined no-gutters>
                             <v-row class="d-flex justify-center ma-2 pt-2"  outlined>
                               <v-col>
                                   <div class="text-center ">
                                   <v-col>
                                      <v-text class="font-weight-bold">Ref</v-text>
                                   </v-col>
                                   <div class="mt-0" dense>
                                     {{n.jref}}
                                   </div>
                                </div>
                               </v-col>
                               <v-col>
                                   <div class="text-center ">
                                   <v-col>
                                      <v-text class="font-weight-medium">Job Title</v-text>
                                   </v-col>
                                   <div class="mt-0">
                                      {{ n.jname }}
                                   </div>
                                </div>
                               </v-col>
                               <v-col>
                                   <div class="text-center ">
                                   <v-col>
                                      <v-text class="font-weight-medium">Closing Date</v-text>
                                   </v-col>
                                   <div class="mt-0">
                                      {{ n.jclose }}
                                   </div>
                                </div>
                               </v-col>
                               <v-col>
                                   <div class="text-center">
                                   <v-col class="pt-8">
                                      <v-btn
                                       class="ma-2 font-weight-medium"
                                       outlined
                                       color="#0082C6"

                                      >
                                      <!-- <router-link :to="`/careerdetails/${n._id}`" tag="span" style="cursor: pointer">
                                          View Details
                                      </router-link> -->
                                       <!-- <router-link to="`/careerdetails/${n._id}`" tag="span" style="cursor: pointer">
                                          View Details
                                       </router-link> -->
                                          <a :href="`/careerdetails/${n._id}`" style="text-decoration: none;">
                                             View Details
                                          </a>
                                      </v-btn>
                                   </v-col>
                                </div>
                               </v-col>


                           </v-row>
                         </v-card>
                         </v-container>
                     </v-card-actions>

                </v-card>
          </v-card>
    </v-container>
</template>
<script>
const baseURL="https://tveta-web-backend.onrender.com/api_v_1"
export default {
   data:()=>({
      jobs:[],
       items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Jobs',
          disabled: true,
          href: '/history',
        }
      ]
   }),
      beforeCreate(){
      this.fetchJobsData()
   },
   created(){
      this.fetchJobsData()

   },
   methods:{
         async fetchJobsData(){
         try{
            const res=await fetch(`${baseURL}/jobs`)
            if(!res.ok){
               const message=`An error has occured:${res.status}-${res.statusText}`
               throw new Error(message)
            }
            const data=await res.json()
            this.jobs=data
         }catch(error){
            this.jobs
         }
      }
   }
}
</script>
