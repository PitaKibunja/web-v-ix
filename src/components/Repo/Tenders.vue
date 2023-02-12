<template>
    <v-container class="mt-8">
          <v-card elevation="2">
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">

                 <h3>Tenders</h3>
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
                     <v-card-actions  v-for="n in tenders" :key="n.refno" >
                         <v-container fluid >
                             <v-card elevation="2" dense color="grey lighten-5" class="d-flex justify-center " outlined no-gutters>
                             <v-row class="d-flex justify-center ma-2 pt-2"  outlined>
                               <v-col>
                                   <div class="text-center ">
                                   <v-col>
                                      <v-text class="font-weight-bold">Tender No</v-text>
                                   </v-col>
                                   <div class="mt-0" dense>
                                     {{ n.refno }}
                                   </div>
                                </div>
                               </v-col>
                               <v-col>
                                   <div class="text-center ">
                                   <v-col>
                                      <v-text class="font-weight-medium">Tender Name</v-text>
                                   </v-col>
                                   <div class="mt-0">
                                      {{ n.tname }}
                                   </div>
                                </div>
                               </v-col>
                               <v-col>
                                   <div class="text-center ">
                                   <v-col>
                                      <v-text class="font-weight-medium">Closing Opening Date</v-text>
                                   </v-col>
                                   <div class="mt-0">
                                     {{ n.openingdate }}
                                   </div>
                                </div>
                               </v-col>
                               <v-col>
                                   <div class="text-center">
                                       <v-col class="mb-0">
                                           <v-text class="font-weight-medium">
                                              Tender Document
                                           </v-text>
                                       </v-col>
                                   <v-col class="mt-0">



                                      <v-btn
                                       class="font-weight-medium"
                                       outlined
                                       color="#0082C6"

                                      >
                                       <router-link to="/careerdetails" tag="span" style="cursor: pointer">
                                       <v-icon>mdi-download</v-icon>
                                          Download
                                       </router-link>

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
      tenders:[],
      items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Tenders',
          disabled: true,
          href: '/history',
        }
      ]
   }),
   beforeCreate(){
      this.fetchData()
   },
   created(){
      this.fetchData()
   },
   methods:{
      async fetchData(){
         try{
            const res=await fetch(`${baseURL}/tenders`)
            if(!res.ok){
               const message=`An error has occured:${res.status}-${res.statusText}`
               throw new Error(message)
            }
            const data=await res.json()
            this.tenders=data
         }catch(error){
            this.tenders
         }
      }
   }

}
</script>
