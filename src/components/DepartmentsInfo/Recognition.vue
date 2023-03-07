<template>
    <v-container class="mt-8" style="height: 100vh;">
      <v-card elevation="2" style="height: 100%;">
        <v-card-title class="ttitle white--text d-flex justify-center">
          <h3 class="text-center font-weight-medium">Recognition and Equation of Qualifications</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="12" md="6">
            <v-card-text>
              <h4 class="font-weight-medium">Recognition of Qualifications</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </v-card-text>
          </v-col>
          <v-col cols="12" md="6">
            <v-card-text>
              <h4 class="font-weight-medium">Equation of Qualifications</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </v-card-text>
          </v-col>
        </v-row>
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
          text: 'Recognition',
          disabled: true,
          href: '/recognition',
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
