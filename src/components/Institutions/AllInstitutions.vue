<template>

<v-container class="mt-8">
  
  <v-card  elevation="2">
   <v-card-title class="ttitle white--text">
    <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
     <div class="font-weight-medium">
                 <h3>TVET Institutions<v-icon class="mb-5" color="green">mdi-check-circle-outline</v-icon> </h3>      
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
      :items="Institutions"
      :search="search"
      :loading="true"
      class="elevation-1"
      primary-key="index"
      fixed-header
      loading-text="Loading Institutions... Please wait"
    >
      <v-progress-linear v-show="progressBar" slot="progress" color="#0082C6" indeterminate></v-progress-linear>
        <template v-slot:item="{item, index}">
            <tr>
              <td>{{index + 1}}</td>
              <td>{{item.name}}</td>
              <td>{{item.regno}}</td>
              <td>{{item.county}}</td>
              <td>{{item.regdate}}</td>
              <td>{{item.expdate}}</td>
              <td>{{item.category}}</td>
              <td>{{item.type}}</td>
              <td>
                <a target="_blank" :href="`/institution/${item._id}`">
                {{ item.details}}
              </a></td>
            </tr>
        </template>
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
        instituteLink:'/institution',
        institutionId:'',
        headers: [
            {
            align: 'start',
            value: 'index',
            text: '#',
          },
          { text: 'Institution Name', value: 'name' },
          { text: 'TVETA Reg. No', value: 'regno' },
          { text: 'County', value: 'county' },
          { text: 'Reg.Date', value: 'regdate' },
          { text: 'Expiry Date', value: 'expdate' },
          { text: 'Category', value: 'category' },
          { text: 'Type', value: 'type' },
          { link: 'Details', value: 'details' },
          // { link: 'View more', value: '_id' },
        ],
        Institutions: [],
      }
    },
     beforeCreate(){
      this.fetchData()
      console.log(this.fetchData())
    },
    created(){
      this.fetchData()
     
    },
    watch:{
      '$route':'fetchData'
    },
    methods:{
      seeDetails(shule){
        this.$router.push(`/institution/${shule}`)
      },
      async fetchData(){
        try {
          const res=await fetch(`${baseURL}/institution`)
          if(!res.ok){
            const message=`An error has occured:${res.status}-${res.statusText}`
            throw new Error(message)
          }
          const data=await res.json()
          this.Institutions=data
          this.progressBar= false
        
        } catch (error) {
          this.Institutions
        }
      }
    }
  }
</script>