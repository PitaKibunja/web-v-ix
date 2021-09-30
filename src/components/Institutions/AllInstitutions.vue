<template>

<v-container >
  <v-row cols="12 " class="d-flex justify-left mb-1 ml-4  pt-4">
     <div class="font-weight-medium">
                 <h2>TVET Institutions</h2>      
                    </div>
   </v-row>
  <v-divider></v-divider> 
 <template>
  <v-card>
    <v-card-title>
      Accredited Institutions
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
      :items="desserts"
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
          { text: 'Institution Name', value: 'name' },
          { text: 'TVETA Reg. No', value: 'fat' },
          { text: 'County', value: 'carbs' },
          { text: 'Reg.Date', value: 'protein' },
          { text: 'Expiry Date', value: 'iron' },
          { text: 'Category', value: 'iron' },
          { text: 'Type', value: 'iron' },
          { text: 'Details', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 'Details',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>