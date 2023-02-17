<template>
<div>
  <v-container class="mt-2 supu"> 
    <v-card elevation="2">
      <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" max-width="400" outlined>
              <v-card-title class="bady white--text justifu-center">{{ cards[0].title }}</v-card-title>
              <v-card-text>{{ cards[0].content }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" lg="8">
        <v-row>
          <v-col v-for="card in cards.slice(1)" :key="card.id" cols="12" md="6" lg="4">
            <v-card class="mx-auto" max-width="auto" outlined>
              <v-card-title class="bady white--text">{{ card.title }}</v-card-title>
              <v-card-text>{{ card.content }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>


      <v-card class="mb-4">
          <v-divider></v-divider>
        <v-card-title>
          <v-row cols="12 " class="d-flex justify-center mb-4 ml-4  pt-2">
              <div class="font-weight-medium">
                 <h3>News and Updates</h3>      
              </div>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-body>
          <NewsTab/>
        </v-card-body>
           
        <v-card class="pt-2 pb-8">
            <ReadMore/>
        </v-card>             
      </v-card>
    </v-card>
  </v-container>
</div>
</template>
<script>

// import Media from '../components/cards/Media.vue'
// import Partners from '../components/cards/Partners.vue'
import ReadMore from '../components/Buttons/ReadMore.vue'
import NewsTab from '../components/navs/NewsTab.vue'
  export default {
      components:{
       
          // Media,
          //  Partners,
           ReadMore,
           NewsTab
      },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
      cards: [
        {
          id: 1,
          title: 'About TVET Authority',
          content: 'The Technical and Vocational Education and Training Authority (TVETA) is a public corporate agency established under the Technical and Vocational Education and Training (TVET) Act No. 29 of 2013 to regulate and coordinate training in the country through licensing, registration and accreditation of programs, institutions and trainers Section 7 of the Act, 2013 gives the powers and functions of the Authority to regulate and coordinate training; inspect, license and register and accredit training institutions; accredit and inspect programmes and courses; promote access and relevance of training programmes; determine the national technical and vocational training objectives; assure quality and relevance in programmes of training among other functions.'
        },
        {
          id: 2,
          title: 'Accreditation ',
          content: 'Phasellus et lorem vel ex tincidunt auctor vel sed elit. Suspendisse potenti. Praesent vestibulum arcu sapien, euismod tempor dolor luctus vitae.'
        },
        {
          id: 3,
          title: 'Standards',
          content: 'Phasellus et lorem vel ex tincidunt auctor vel sed elit. Suspendisse potenti. Praesent vestibulum arcu sapien, euismod tempor dolor luctus vitae.'
        },
        {
          id: 4,
          title: 'Outreach',
          content: 'Phasellus et lorem vel ex tincidunt auctor vel sed elit. Suspendisse potenti. Praesent vestibulum arcu sapien, euismod tempor dolor luctus vitae.'
        },

        {
          id: 5,
          title: 'Compliance',
          content: 'Fusce ut libero vel turpis eleifend mollis. In hac habitasse platea dictumst. Nam at lectus quis enim scelerisque sagittis.'
        },
        {
          id: 6,
          title: 'Policy and Strategy',
          content: 'Fusce ut libero vel turpis eleifend mollis. In hac habitasse platea dictumst. Nam at lectus quis enim scelerisque sagittis.'
        },
        {
          id: 7,
          title: 'Research',
          content: 'Fusce ut libero vel turpis eleifend mollis. In hac habitasse platea dictumst. Nam at lectus quis enim scelerisque sagittis.'
        }
      ]
    }),
  }
</script>