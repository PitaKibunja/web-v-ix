<template>

<v-container class="mt-8">
  
  <v-card  elevation="2">
   <!-- <v-card-title class="ttitle white--text">
    <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
     <div class="font-weight-medium">
                 <h3>TVET Institutions<v-icon class="mb-5" color="green">mdi-check-circle-outline</v-icon> </h3>      
                    </div>
   </v-row>
    </v-card-title>
  <v-divider></v-divider>  -->
 <template>
  <v-card>
    <v-card-title class="bady accent-5 white--text">
      <h3>Media</h3>
      <v-spacer></v-spacer>
      <v-btn to="/NewUser">Add New</v-btn>
      <v-spacer></v-spacer>
      
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        dense
        single-line
        hide-details
        dark
      ></v-text-field>
    </v-card-title>
    <v-divider></v-divider>
    <div class="ma-2 pa-2">
        <v-spacer></v-spacer>
        
    </div>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="Institutions"
      :search="search"
      :loading="true"
      class="elevation-1"
      primary-key="index"
      fixed-header
      loading-text="Loading Institutions... Please wait"
    >
      <v-progress-linear v-show="progressBar" slot="progress" color="#0082C6" indeterminate></v-progress-linear>
        <template v-slot:item="{item, index}">
            <tr>
              <td>{{index + 1}}</td>
              <td>{{item.fullName}}</td>
              <td>{{item.email}}</td>
              <td>{{item.roles}}</td>
              <td>{{item.twofactorAuth}}</td>
              <td>{{item.createdAt}}</td>
              <td>
                <a target="_blank" :href="`/institution/${item._id}`">
                <v-icon aria-hidden="false">
                  mdi-pencil-outline
                </v-icon>
              </a></td>
            </tr>
        </template>
    </v-data-table>
  </v-card>
</template>
  </v-card>
      

   
</v-container>

<!-- 
<v-container>

      
</v-container> -->

</template>