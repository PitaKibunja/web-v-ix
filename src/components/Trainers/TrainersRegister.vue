<template>

<v-container >
  <v-row cols="12 " class="d-flex justify-left mb-1 ml-4  pt-4">
     <div class="font-weight-medium">
                 <h2>TVET Registered and Licensed Trainers July 2020</h2>      
                    </div>
   </v-row>
  <v-divider></v-divider> 
 <template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        dense
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="Trainers"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
      

   
</v-container>

<!-- 
<v-container>

      
</v-container> -->

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
          
          { text: 'TVETA Reg. No', value: 'regno' },
          { text: 'Full Name', value: 'name' },
          { text: 'Area of Specialization', value: 'area' },
          { text: 'Category', value: 'category' },
          { text: 'KNQF Level', value: 'status' }
        ],
        Trainers: [
          {
            name: 'Koech Kipkemboi Vincent',
            regno:'TVETA/T1900001',
            area:'Automotive Engineering',
            category:'Trainer',
            status:'Licensed to train upto level 6/ upto Diploma',
          },{
            name: 'Pita Kibunja',
            regno:'TVETA/T15',
            area:'Automotive Engineering',
             category:'Trainer',
            status:'Licensed to train upto level 6/ upto Diploma',
          },{
            name: 'Koech Kipkemboi Vincent',
            regno:'TVETA/T1900001',
            area:'Automotive Engineering',
             category:'Trainer',
            status:'Licensed to train upto level 6/ upto Diploma',
          },{
            name: 'Koech Kipkemboi Vincent',
            regno:'TVETA/T1900001',
            area:'Automotive Engineering',
             category:'Trainer',
            status:'Licensed to train upto level 6/ upto Diploma',
          },{
            name: 'Koech Kipkemboi Vincent',
            regno:'TVETA/T1900001',
            area:'Automotive Engineering',
             category:'Trainer',
            status:'Licensed to train upto level 6/ upto Diploma',
          },{
            name: 'Koech Kipkemboi Vincent',
            regno:'TVETA/T1900001',
            area:'Automotive Engineering',
             category:'Trainer',
            status:'Licensed to train upto level 6/ upto Diploma',
          },{
            name: 'Koech Kipkemboi Vincent',
            regno:'TVETA/T1900001',
            area:'Automotive Engineering',
             category:'Trainer',
            status:'Licensed to train upto level 6/ upto Diploma',
          },{
            name: 'Koech Kipkemboi Vincent',
            regno:'TVETA/T1900001',
            area:'Automotive Engineering',
             category:'Trainer',
            status:'Licensed to train upto level 6/ upto Diploma',
          },

        ]
      }
    },
  }
</script>