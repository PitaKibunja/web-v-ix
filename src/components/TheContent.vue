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
  <!-- <v-container class="fluid"> -->
<!-- <CountInst/> -->
<v-card class="mx-auto" max-width="auto">
  <v-card-title class="text-center" style="background-color: #0082C6; color: white">
    <div class="mx-auto">
      Accredited Institutions
    </div>
  </v-card-title>
  <v-card-text>
    <v-container fluid>
      <CountCard/>
    </v-container>
  </v-card-text>
</v-card>

  <!-- </v-container> -->

  <v-card class="mx-auto" max-width="auto">
    <v-card-title class="text-center" style="background-color: #0082C6; color: white">
    <div class="mx-auto">
      News and Updates
    </div>
  </v-card-title>
    <v-card-text>
      <v-container fluid>
        <NewsTab/>
      </v-container>
    </v-card-text>
  </v-card>

     
    </v-card>
  </v-container>
</div>
</template>
<script>

// import Media from '../components/cards/Media.vue'
// import Partners from '../components/cards/Partners.vue'
// import ReadMore from '../components/Buttons/ReadMore.vue'
import NewsTab from '../components/navs/NewsTab.vue'
import CountCard from '../components/cards/countInst.vue'
  export default {
      components:{
       
          // Media,
          //  Partners,
      // ReadMore,
      CountCard,
           NewsTab
      },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
      vtcCount: 10,
    tvcCount: 20,
    npCount: 5,
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
<style scoped>
.v-card {
  background-color: #f7f7f7;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>