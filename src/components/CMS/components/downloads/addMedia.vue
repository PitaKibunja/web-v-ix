<template>

<v-container fluid>
                <v-card>
                                      <v-card-title class="dark pb-6">
                 <v-row cols="12 " class="d-flex justify-start mb-1 ml-4  pt-2">
                   <h3>User Profile</h3>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
                    <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-start mb-1 ml-4  pt-2">
                   New User
                    </v-row>
            </v-card-title>
                <v-container>
                    <v-card class="ma-4 pa-2">
                         <template>
                                <v-form
                                class="pa-2 ma-2"
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    @submit.prevent="saveFeedback"
                                    
                                >                                    
                                    <v-text-field
                                    v-model="customerFeedback.name"
                                    :counter="10"
                                    :rules="nameRules"
                                    label="Title*"
                                    required
                                    class="input-group--focused  pa-2 ma-2"
                                    ></v-text-field>

                                       <v-select
                                    v-model="customerFeedback.feedbacktype"
                                    :items="items"
                                    :rules="[v => !!v || 'Item is required']"
                                    label="Category"
                                    required
                                    class="input-group--focused  pa-2 ma-2"
                                    ></v-select>

                                    
                                    <v-btn
                                    
                                    color="#508F40"
                                    class="mr-4"
                                    dark
                                    type="submit"
                                    @click="snackbar= true"
                                    >
                                    Save
                                    </v-btn>
                                </v-form>
                                </template>
                </v-card>
                </v-container>
                </v-card>

   
</v-container>
</template>
<script>
 export default {
    data () {
      return {
         show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },





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
            'Admin',
          'Editor',
          'Author'
          
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
        this.$http.post('http://localhost:3000/api_v_1/feedback',this.customerFeedback)
        .then((result)=>{
          console.warn(result)
        })
       
        
      }
    },
  }
</script>