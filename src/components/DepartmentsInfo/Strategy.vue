<template>
    <v-container class="mt-8">
          <v-card elevation="2">
               
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Policy and Strategy</h3>      
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
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quaerat accusantium minima, tempora quibusdam repudiandae! Repellat aut eius fugiat, sequi, ut sed debitis, cum deleniti voluptatum tempore autem magnam iure.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quaerat accusantium minima, tempora quibusdam repudiandae! Repellat aut eius fugiat, sequi, ut sed debitis, cum deleniti voluptatum tempore autem magnam iure.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quaerat accusantium minima, tempora quibusdam repudiandae! Repellat aut eius fugiat, sequi, ut sed debitis, cum deleniti voluptatum tempore autem magnam iure.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quaerat accusantium minima, tempora quibusdam repudiandae! Repellat aut eius fugiat, sequi, ut sed debitis, cum deleniti voluptatum tempore autem magnam iure.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quaerat accusantium minima, tempora quibusdam repudiandae! Repellat aut eius fugiat, sequi, ut sed debitis, cum deleniti voluptatum tempore autem magnam iure.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quaerat accusantium minima, tempora quibusdam repudiandae! Repellat aut eius fugiat, sequi, ut sed debitis, cum deleniti voluptatum tempore autem magnam iure.
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quaerat accusantium minima, tempora quibusdam repudiandae! Repellat aut eius fugiat, sequi, ut sed debitis, cum deleniti voluptatum tempore autem magnam iure.
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
          text: 'Strategy and Policy',
          disabled: true,
          href: '/strategy',
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