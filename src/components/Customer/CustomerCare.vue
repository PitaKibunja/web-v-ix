<template>
  <v-container class="mt-8">
    <v-card elevation="2">
      <v-card-title class="custom-color white--text">
        <div class="font-weight-medium d-flex justify-center">
          <h3>Customer Care</h3>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <div class="text-blue d-flex justify-center">
        <p class="text-justify gold--text">
          Call Us Today! Tel: +254-20 2392140 | Cell: +254 700 015 440 |
          info@tveta.go.ke
        </p>
      </div>
      <v-divider></v-divider>
      <div>
        <v-breadcrumbs :items="linkss">
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
      </div>
      <v-divider></v-divider>
      <v-row>
        <v-col cols="12" sm="6" md="8">
          <v-card class="pa-2" outlined tile>
            <v-card-title class="body-color">
              <div class="font-weight-medium d-flex justify-center">
                <p class="white--text font-weight-medium mb-0">
                  Customer Feedback
                </p>
              </div>
            </v-card-title>
            <v-container class="supu">
              <v-card class="ma-4 pa-4">
                <template>
                  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="saveFeedback">
                    <v-select v-model="customerFeedback.feedbacktype" :items="items" :rules="[v => !!v || 'Item is required']" label="Type of Feedback" required></v-select>
                    <v-text-field v-model="customerFeedback.name" :counter="10" :rules="nameRules" label="Name*" required></v-text-field>
                    <v-text-field v-model="customerFeedback.email" :rules="emailRules" label="E-mail*" required></v-text-field>
                    <v-textarea v-model="customerFeedback.feedbackMsg" clearable clear-icon="mdi-close-circle" label="Message"></v-textarea>
                    <v-btn color="#508F40" class="mr-4" dark type="submit" @click="snackbar = true">Submit</v-btn>
                  </v-form>
                </template>
                <v-snackbar v-model="snackbar" :timeout="timeout">
                  {{ text }}
                  <template v-slot:action="{ attrs }">
                    <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
                  </template>
                </v-snackbar>
              </v-card>
            </v-container>
            <v-divider></v-divider>
          </v-card>
        </v-col>
        <v-col class="mt-2 pb-4">
  <v-card max-width="360">
    <v-card>
      <v-card-title class="body-color justify-center">
        <div class="font-weight-medium">
          <p class=" white--text font-weight-medium mb-0">CONTACT US</p>
        </div>
      </v-card-title>
    </v-card>
    <v-divider></v-divider>
    <v-card v-for="location in locations" :key="location.area" tile class="supu white--text mx-auto">
      <v-card-title class="justify-center">
        <p class="font-weight-medium justify-center">{{ location.area }} <router-link to=""><v-icon color="white">mdi-map-marker</v-icon></router-link></p>
        <v-divider></v-divider>
      </v-card-title>
      <v-card-text class="text-justify">
        <v-list-item v-for="address in location.list" :key="address.house">
          <v-container>
            <v-list-item-content class="white--text pa-0 ma-0">
              <v-list-item-title class="text-wrap">{{ address.house }}</v-list-item-title>
              <v-list-item-title>{{ address.box }}</v-list-item-title>
              <v-list-item-title>{{ address.phone }}</v-list-item-title>
              <v-list-item-title>{{ address.cell }}</v-list-item-title>
              <v-list-item-title class="mb-0">{{ address.phone }}</v-list-item-title>
            </v-list-item-content>
          </v-container>
        </v-list-item>
      </v-card-text>
    </v-card>
  </v-card>
</v-col>
             </v-row>
            
          </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
      snackbar: false,
      text: 'Sent successfully',
      timeout: 2000,
        customerFeedback:{
          feedbacktype:null,
          name:null,
          email:null,
          feedbackMsg:null

        },
            locations:[
           {area:'Nairobi',list:[
          {house:'Utaliii House 8th Floor, Utalii Street'},
          {box:'P.O. Box 35625 - 00100'},
          {phone:'Phone:+254 20 239 2140'},
          {cell:'Cell: +254 700 015 440'},
          {web:'Web: www.tveta.go.ke'},
        ]},
        {area:'Kisumu',list:[
          {house:'Kenya Re Insurance building 2nd Floor Wing B, Oginga Odinga Street'},
          {box:'P.O. Box 35625 - 00100'},
          {phone:'Phone:+254 20 239 2140'},
          {cell:'Cell: +254 700 015 440'},
          {web:'Web: www.tveta.go.ke'},
        ]},
        {area:'Eldoret',list:[
          {house:'KVDA Plaza 7th Floor Southern Wing, Oloo street'},
          {box:'P.O. Box 35625 - 00100'},
          {phone:'Phone:+254 20 239 2140'},
          {cell:'Cell: +254 700 015 440'},
          {web:'Web: www.tveta.go.ke'},
        ]},
         {area:'Mombasa',list:[
          {house:'NSSF building Ground Floor, Nkurumah Road'},
          {box:'P.O. Box 35625 - 00100'},
          {phone:'Phone:+254 20 239 2140'},
          {cell:'Cell: +254 700 015 440'},
          {web:'Web: www.tveta.go.ke'},
        ]},
        ],
          valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
            'General Enquiry',
          'Corruption Reporting',
          'Complaints',
          'Customer Feedback'
      ],
      checkbox: false,

          linkss: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'Customer Care',
          disabled: true,
          href: '/customercare',
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
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      saveFeedback(){
        this.$http.post('https://tveta-web-backend.onrender.com/api_v_1/feedback',this.customerFeedback)
        .then((result)=>{
          console.warn(result)
        })


      }
    },
  }
</script>
<style scoped>
.custom-color {
  background-color: #00547F;
}
.body-color{
  background-color:#508F40;
}
</style>
