<template>
    <v-container class="mt-8">
          <v-card elevation="2">
               
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3></h3>      
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
          </v-card>
    </v-container>
</template>