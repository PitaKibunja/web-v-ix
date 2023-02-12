<template>
<v-container fluid>
      <v-carousel height="510" cycle class="mt-0 pt-0" :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"

    >
    <v-img :src="item.src" contain  width="auto"></v-img>
    </v-carousel-item>
  </v-carousel>
  <v-card v-if="jobssize" class="mx-4 mb-4" color="#508F40" style="position:absolute;float:right;top:75px;z-index:400">
    <v-card class="mx-auto" max-width="400" outlined>
          <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
       <v-badge
          color="#508F40"
          :content="jobssize"
        >
          <router-link to="/career" tag="span" style="cursor: pointer">
          Careers and Job Adverts
        </router-link>

        </v-badge>

      </v-btn>

    </v-card-actions>
    </v-card>
  </v-card>
  <v-card v-if="tenderssize" class="mx-4 my-4" dark color="primary" style="position:absolute;float:right;top:200px;z-index:400">
    <v-card class="mx-auto" max-width="400" outlined>
          <v-card-actions>
      <v-btn
        outlined
        rounded
       elevation="3"
       color="#FFCE66"


      >

           <v-badge
          color="#508F40"
          :content="tenderssize"

        >
        <router-link to="/tenders" tag="span" style="cursor: pointer">
          TVET Authority Tenders
        </router-link>

        </v-badge>
      </v-btn>

    </v-card-actions>
    </v-card>
  </v-card>
  <div class="ma-2 mb-4">
    <LinkShortcut/>
  </div>
    <v-divider></v-divider>

</v-container>

</template>
<script>
const baseURL="https://tveta-web-backend.onrender.com/api_v_1"
// import UtilityLinks from './UtilityLinks.vue'
import LinkShortcut from './navs/LinkShortcut.vue'
  export default {
      components:{
          // UtilityLinks
          LinkShortcut
      },
    data () {
      return {
        tenders:[],
        jobs:[],
        jobssize:0,
        tenderssize:0,
          links: [

       { text: 'Customer Care', icon: 'mdi-face-agent' },
        { text: 'Standards', icon: 'mdi-flag' },


         { text: 'MIS', icon: 'mdi-login'},
        { text: 'FAQs', icon: 'mdi-frequently-asked-questions' },

         { text: 'Strategic Plan', icon: 'mdi-strategy' },
         { text: 'Service Charter', icon: 'mdi-strategy' },



      ],
              icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
        'mdi-face-agent',
        'mdi-strategy',
      ],
        items: [
          {
            src: 'https://i.ibb.co/zn3xqR9/DSC0383-1024x684.jpg',
          },
          {
            src: 'https://i.ibb.co/JsZLzB0/240577329-4168000269976500-5085128446927312642-n.jpg',
          },
          {
            src: 'https://i.ibb.co/YNjBb3B/239489643-4168000479976479-6619135501472665187-n.jpg',
          },
             {
            src: 'https://i.ibb.co/FB1XNjt/236983064-4162058043904056-7427814435797520698-n.jpg',
          },
             {
            src: 'https://i.ibb.co/rfLMx1M/203091261-3986897954753400-7696855567271664318-n.jpg',
          }
        ],
      }
    },
    beforeCreate(){
      this.fetchTendersData()
      this.tenderssize=this.tenders.length
      this.fetchJobsData()
      this.jobssize=this.jobs.length
   },
   created(){
      this.fetchTendersData()
      this.tenderssize=this.tenders.length
      this.fetchJobsData()
      this.jobssize=this.jobs.length
   },
   methods:{
      async fetchTendersData(){
         try{
            const res=await fetch(`${baseURL}/tenders`)
            if(!res.ok){
               const message=`An error has occured:${res.status}-${res.statusText}`
               throw new Error(message)
            }
            const data=await res.json()
            this.tenders=data
            this.tenderssize=this.tenders.length
         }catch(error){
            this.tenders
         }
      },
         async fetchJobsData(){
         try{
            const res=await fetch(`${baseURL}/jobs`)
            if(!res.ok){
               const message=`An error has occured:${res.status}-${res.statusText}`
               throw new Error(message)
            }
            const data=await res.json()
            this.jobs=data
            this.jobssize=this.jobs.length
         }catch(error){
            this.jobs
         }
      }
   }
  }
</script>
