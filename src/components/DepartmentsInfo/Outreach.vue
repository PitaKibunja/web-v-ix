<template>
    <v-container class="mt-8">
          <v-card elevation="2">
               
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Outreach</h3>      
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
                 <p class="text-justify pt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit ducimus mollitia rem debitis maxime aut veniam nesciunt assumenda sint veritatis sit illo, hic provident nisi adipisci doloribus inventore deserunt!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit ducimus mollitia rem debitis maxime aut veniam nesciunt assumenda sint veritatis sit illo, hic provident nisi adipisci doloribus inventore deserunt!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit ducimus mollitia rem debitis maxime aut veniam nesciunt assumenda sint veritatis sit illo, hic provident nisi adipisci doloribus inventore deserunt!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur velit ducimus mollitia rem debitis maxime aut veniam nesciunt assumenda sint veritatis sit illo, hic provident nisi adipisci doloribus inventore deserunt!
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
          text: 'Outreach',
          disabled: true,
          href: '/outreach',
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