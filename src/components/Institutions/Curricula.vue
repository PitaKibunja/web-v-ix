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
    ></v-data-table>
  </v-card>
</template>
       
        </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'SN',
            align: 'start',
            sortable: false,
            value: '1',
          },
          { text: 'Course Title', value: 'course' },
          { text: 'Body', value: 'body' },
          { text: 'Level', value: 'level' },
       
        ],
        Courses: [
          {
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          }, {
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          }, {
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          }, {
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          }, {
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          }, {
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          } ,{
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          }, {
            course: 'Aeronautical engineering- airframes and power plant',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Agricultural Extension',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Baking Technology- production of yeast products',
            body:'TVET CDACC',
            level:'6',
          },{
            course: 'Automotive Mechatronics (Cooperative Training)',
            body:'TVET CDACC',
            level:'6',
          }

        ],
      }
    },
  }
</script>