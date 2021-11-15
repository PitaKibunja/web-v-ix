<template>
<v-container class="mt-8 pb-8">

      <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
    <v-card  elevation="2">
   <v-card-title class="ttitle white--text">
    <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
     <div class="font-weight-medium">
                 <h3>Admin Login </h3>      
                    </div>
   </v-row>
    </v-card-title>
    </v-card>
  <v-divider></v-divider> 
  
      <v-card ref="form">
             <v-row class="d-flex justify-center ma-2  pa-2">
                       <v-card width="220" flat color="white">
               <v-img  src="../../assets/tveta_logo.png"></v-img>
           </v-card>
        </v-row>
            <v-text-field
            v-model="email"
            :rules="[rules2.required, rules2.email]"
            label="E-mail"
            class="pa-2 ma-2 pt-4"
            value=""
          ></v-text-field>   
                    <v-text-field
            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show3 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            value=""
            hint="At least 8 characters"
            class="input-group--focused pa-2 ma-2"
            @click:append="show3 = !show3"
          ></v-text-field>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn
            color="ttitle"
            class="white--text"
            large
            @click="submit"
          >
            Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

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
        email: '',
        rules2: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
      }
    }
  }}
</script>