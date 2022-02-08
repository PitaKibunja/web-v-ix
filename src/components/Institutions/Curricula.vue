<template>
    <v-container class="mt-8">
        <v-card>
            <v-card-title class="ttitle accent-5 white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1">
     <div class="font-weight-medium">
                 <h3> Approved CBET Curricula <v-icon class="mb-5" medium color="white">mdi-check-circle-outline</v-icon> </h3>
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
        width="30"
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="Courses"
      :search="search"
      :loading="true"
      class="elevation-1"
      primary-key="index"
      loading-text="Loading Courses... Please wait"
    >
    <v-progress-linear v-show="progressBar" slot="progress" color="#0082C6" indeterminate></v-progress-linear>
    <template v-slot:item="{item, index}">
            <tr>
              <td>{{index + 1}}</td>
              <td>{{item.course}}</td>
              <td>{{item.body}}</td>
              <td>{{item.level}}</td>
            </tr>
        </template>
    </v-data-table>
  </v-card>
</template>

        </v-card>
    </v-container>
</template>
<script>
const baseURL="https://tveta-backend.herokuapp.com/api_v_1"
  export default {
    data () {
      return {
        progressBar: true,
        search: '',
        headers: [
              {
            align: 'start',
            value: 'index',
            text: '#',
          },
          { text: 'Course Title', value: 'course' },
          { text: 'Body', value: 'body' },
          { text: 'Level', value: 'level' },

        ],
        Courses: []
      }
    },
       created(){
      //fetch the data when the view is created and data is
      //already being observed
      this.fetchData()
      console.log(this.fetchData())
    },
    watch:{
      //call again the method if the route changes
      '$route':'fetchData'
    },
    methods:{
      async fetchData(){
        try{
          const res=await fetch(`${baseURL}/courses`)
          if(!res.ok){
            const message=`An error has occured:${res.status}-${res.statusText}`
            throw new Error(message)
          }
          const data=await res.json()
          this.Courses=data
          this.progressBar= false
        }catch(err){
          this.Courses=err.message
        }
      },
      clearGetOutput(){
        this.Courses=null
      }
    }
  }
</script>
