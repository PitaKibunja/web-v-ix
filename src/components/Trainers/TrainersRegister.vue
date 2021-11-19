<template>

<v-container class="mt-8">
          <v-card elevation="2">
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
     <div class="font-weight-medium">
                
                 <h3> TVET Registered and Licensed Trainers 2021 <v-icon class="mb-5" medium color="green">mdi-check-circle-outline</v-icon> </h3>      
                    </div>
                    </v-row>
            </v-card-title>
        
  <v-divider></v-divider> 
 <template>
  <v-card>
    <v-card-title class="bady accent-5 white--text">
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        dense
        single-line
        hide-details
        dark
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="trainers"
      :loading="true"
      :search="search"
      class="elevation-1"
    >
     <v-progress-linear v-show="progressBar" slot="progress" color="#0082C6" indeterminate></v-progress-linear>
    </v-data-table>
  </v-card>
</template>
      

   </v-card>  
</v-container>

<!-- 
<v-container>

      
</v-container> -->

</template>
<script>
const baseURL="http://localhost:3000/api_v_1"
  export default {
    data () {
      return {
        progressBar: true,
        search: '',
        headers: [
          {
            text: 'SN',
            align: 'start',
            sortable: false,
            value: '1',
          },
          
          { text: 'TVETA Reg. No', value: 'regno' },
          { text: 'Full Name', value: 'fullname' },
          { text: 'Area of Specialization', value: 'specialization' },
          { text: 'Category', value: 'cluster' },
          { text: 'KNQF Level', value: 'status' }
        ],
        trainers: []
      }
    },
    created(){
      this.fetchData()
      
    },
    watch:{
      '$route':'fetchData'
    },
    methods:{
      async fetchData(){
        try{
          const res=await fetch(`${baseURL}/trainers`)
          if(!res.ok){
            const message=`An error has occured:${res.status}-${res.statusText}`
            throw new Error(message)
          }
          const data=await res.json()
          this.trainers=data
          this.progressBar=false
        }catch(err){
          this.trainers=err.message
        }
      },
       clearGetOutput(){
        this.trainers=null
      }
    }
  }
</script>