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
    >
      <!-- <template v-slot:[`item._id`]="{ value }">
          <v-btn @click="seeDetails(value)">
            {{ value }}
          </v-btn>
          
        </template>  -->
        <template v-slot:[`item.details`]="{ value }">
          <v-btn @click="seeDetails(item._id)">
            {{value}}
          </v-btn>
          
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
        search: '',
        instituteLink:'/institution',
        institutionId:'',
        headers: [
          {
            text: 'No',
            align: 'start',
            sortable: false,
            value: '1',
          },
          { text: 'Institution Name', value: 'name' },
          { text: 'TVETA Reg. No', value: 'regno' },
          { text: 'County', value: 'county' },
          { text: 'Reg.Date', value: 'regdate' },
          { text: 'Expiry Date', value: 'expdate' },
          { text: 'Category', value: 'category' },
          { text: 'Type', value: 'type' },
          { link: 'Details', value: 'details' },
        ],
        Institutions: [],
      }
    },
    created(){
      this.fetchData()
      console.log(this.fetchData())
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
          console.log(data)
        } catch (error) {
          this.Institutions
        }
      }
    }
  }
</script>