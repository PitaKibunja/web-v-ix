<template>
    <v-container>
             <v-card class="ma-2 pa-2" color="gray" elevation="4">
                 <v-card-title>
                        <div class="font-weight-medium">
                        <p class="gray--text font-weight-medium mb-0">
                            Change Password
                        </p>
                        </div>
                 </v-card-title>
                            <template>
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <v-text-field
                                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required, rules.min]"
                                        :type="show3 ? 'text' : 'password'"
                                        name="input-10-2"
                                        label="Current Password"
                                        value=""
                                        hint="At least 8 characters"
                                        class="input-group--focused pa-2 ma-2"
                                        @click:append="show3 = !show3"
                                    ></v-text-field>


                            <v-text-field
                                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required, rules.min]"
                                        :type="show3 ? 'text' : 'password'"
                                        name="input-10-2"
                                        label="New Password"
                                        value=""
                                        hint="At least 8 characters"
                                        class="input-group--focused pa-2 ma-2"
                                        @click:append="show3 = !show3"
                                    ></v-text-field>
                                                                <v-text-field
                                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                                        :rules="[rules.required, rules.min]"
                                        :type="show3 ? 'text' : 'password'"
                                        name="input-10-2"
                                        label="Confrim Password"
                                        value=""
                                        hint="At least 8 characters"
                                        class="input-group--focused pa-2 ma-2"
                                        @click:append="show3 = !show3"
                                    ></v-text-field>
                                    <v-btn
                                    :disabled="!valid"
                                    color="#508F40"
                                    class="mr-4"
                                    @click="validate"
                                    >
                                    Submit
                                    </v-btn>
                                </v-form>
                                </template>
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
        
    }
  }}
</script>