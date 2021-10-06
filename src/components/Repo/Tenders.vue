<template>
    <v-container class="mt-8">
          <v-card elevation="2">
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3> Tenders</h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
                <v-card>
                    
                    <v-row class="d-flex justify-center font-weight-medium ma-2" outlined>
                    
                            
                            <v-col>Tender No</v-col>
                            <v-col>Tender Title</v-col>
                            <v-col>Closing Opening Date</v-col>
                            <v-col>Tender Document</v-col>
                        
                        
                    </v-row>
                    <v-divider></v-divider>
                     <v-card-actions  v-for="n in 10" :key="n">
                         <v-container fluid>
                             <v-card elevation="3">
                             <v-row class="d-flex justify-center ma-2 pt-2" no-gutters outlined>
                            <v-col>11</v-col>
                            <v-col>TVET MIS DESIGNTVET MIS DESIGNTVET MIS DESIGNTVET MIS DESIGN</v-col>
                            <v-col>12-oct-2020 5:30 PM</v-col>
                            <v-col class="pt-3">
                                <v-btn 
                                class="ma-2"
                                outlined
                                color="blue"
                                >
                                    <v-icon>mdi-download</v-icon>
                                    Download
                                </v-btn>
                            </v-col>
                        
                        
                    </v-row>
                         </v-card>
                         </v-container>
                     </v-card-actions>
                
                </v-card>
          </v-card>
    </v-container>
</template>