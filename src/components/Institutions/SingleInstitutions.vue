<template>
    <v-container class="mt-8">
        <v-card>
        <v-card-title class="ttitle white--text">
  <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-1">
     <div class="font-weight-medium">
         <v-row class="mb-1 pt-4">
             <v-spacer></v-spacer>
                <v-btn
                    class=" mb-0"
                    fab
                    dark
                    medium
                    elevation="2"
                    color="primary"
                    >
                    <v-icon size="45" dark>
                        mdi-gavel
                    </v-icon>
                    </v-btn>
           
                 <h3 class="ml-4 pt-2">Kaimbaga Institute of Technology<v-icon class="mb-5"  color="green accent-5">mdi-check-circle-outline</v-icon> </h3>
                  </v-row>      
                    </div>

   </v-row>
   </v-card-title>
  <v-divider></v-divider> 
<v-card class="supu pt-4 mb-4" dense>
    <v-simple-table class=""  style="  border: 1px solid green;
  border-collapse: collapse;">
    <template v-slot:default>
          <tbody  style="  border: 1px solid black;
  border-collapse: collapse;">
    <tr>
        <th>TVETA Reg No:</th>
        <td>Bill Gates</td>
        <th></th>
        <td></td>
  </tr>
      <tr>
        <th>Physical Location:</th>
        <td>Downstreet Kiahuria</td>
        <th>County:</th>
        <td>Kiambu</td>
  </tr>
      <tr>
        <th>Category:</th>
        <td>Technical and Vocational College</td>
        <th>Type:</th>
        <td>Private</td>
  </tr>
      <tr>
        <th>Registration Date:</th>
        <td>28/01/2016</td>
        <th>Expiry Date:</th>
        <td>28/01/2021</td>
  </tr>
        <tr>
        <th>P.O Box:</th>
        <td>P.O Box 10101-20100</td>
        <th>Phone no:</th>
        <td>0712345678</td>
  </tr>
     <tr>
        <th>Email</th>
        <td>info@gmail.com</td>
        <th>Website:</th>
        <td>www.abc.com</td>
  </tr>
  <tr></tr>
          </tbody>
    </template>
  </v-simple-table>
</v-card>
  <!-- The second table goes here -->

    <v-divider></v-divider> 
  <v-card class="white--text mb-4">
    <v-card-title  class="bady white--text" >
        <v-row cols="12 " class="bady white--text d-flex justify-left  pt-4">
     <div class=" font-weight-medium">
                 <h3>Licensed Courses</h3>      
    </div>
   </v-row>
    </v-card-title>
<template>
  <v-simple-table  style="  border: 1px solid green;
  border-collapse: collapse; padding-top:0;">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            <tr>
                <th class="text-bold">Sn: </th>
            </tr>
          </th>
          <th class="text-left">
            Course
          </th>
          <th class="text-left">
            Assessment Body
          </th>
          <th class="text-left">
            Level
          </th> 
        <th class="text-left">
            Max Enrollment
          </th> 
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,i) in institution"
          :key="item.name"
        >
          <td>{{i}}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
  </v-card>
  </v-card>
    </v-container>
</template>
<script>
const baseURL="http://localhost:3000/api_v_1"
  export default {
    data () {
      return {
        loading:false,
        institution: [],
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