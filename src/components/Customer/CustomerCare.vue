<template>
    <v-container class="mt-8">
          <v-card elevation="2" >
               
            <v-card-title class="custom-color white--text" >
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Customer Care</h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <div class="text-blue d-flex justify-center mb-1 ml-4  pt-2">
                        <p class="text-justify gold--text">
                        Call Us Today! Tel: +254-20 2392140 | Cell: +254 700 015 440 | info@tveta.go.ke
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
            <v-container>
             <v-row no-gutters>
                 <v-col
                cols="12"
                sm="6"
                md="8"
                 >
                <v-card
                class="pa-2"
                outlined
                tile
                >
                <v-card-title class="custom-color">
                        <v-row cols="12 " class="d-flex justify-center mb-1 ma-1  pt-2" dark>
                            <div class="font-weight-medium">
                            <p class="white--text font-weight-medium mb-0">
                                Customer Feedback
                            </p>
                            <v-divider></v-divider>
                            </div>
                            </v-row>
                    </v-card-title>
                    <v-container class="body-color">
                        <v-card class="ma-4 pa-4">
                            <template>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    @submit.prevent="saveFeedback"
                                    
                                >
                                
                                    <v-select
                                    v-model="customerFeedback.feedbacktype"
                                    :items="items"
                                    :rules="[v => !!v || 'Item is required']"
                                    label="Type of Feedback"
                                    required
                                    ></v-select>

                                    <v-text-field
                                    v-model="customerFeedback.name"
                                    :counter="10"
                                    :rules="nameRules"
                                    label="Name*"
                                    required
                                    ></v-text-field>

                                    <v-text-field
                                    v-model="customerFeedback.email"
                                    :rules="emailRules"
                                    label="E-mail*"
                                    required
                                    ></v-text-field>
                                    <v-textarea
                                      v-model="customerFeedback.feedbackMsg"
                                        clearable
                                        clear-icon="mdi-close-circle"
                                        label="Message"
                                        
                                        ></v-textarea>
                                    <v-btn
                                    
                                    color="#508F40"
                                    class="mr-4"
                                    dark
                                    type="submit"
                                    
                                    >
                                    Submit
                                    </v-btn>
                                </v-form>
                                </template>
                        </v-card>
                    </v-container>
                    <v-divider></v-divider>
                    </v-card>  
                 </v-col>
                 <v-col class="ml-4 pb-4">
                     <v-card max-width="360">
                            <v-card>
                              <v-card-title class="custom-color justify center">
                                    <div class="font-weight-medium">
                                    <p class="white--text font-weight-medium mb-0">
                                      CONTACT US 
                                    </p>
                                    </div>
                            </v-card-title>
                            </v-card>
                            <v-divider></v-divider>
                            <v-card  v-for="location in locations" :key="location.area" tile class="body-color white--text mx-auto " >
                               <v-card-title class="justify center">
                                    
                                    <p class="font-weight-medium justify-center">
                                      {{ location.area }} <router-link to=""><v-icon color="white">mdi-map-marker</v-icon></router-link>
                                      <v-divider></v-divider>
                                    </p>
                                    
                                    
                            </v-card-title >
                                <v-card-text class="text-justify">
                                    <v-list-item one-line v-for="address in location.list" :key="address.house">
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
            </v-container>
          </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
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
            'General Feedback',
          'Corruption Reporting',
          'Complain'
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
        console.warn(this.customerFeedback)
        this.$http.post('http://localhost:3000/api_v_1/feedback',this.customerFeedback)
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