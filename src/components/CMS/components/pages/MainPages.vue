<template>

<v-container class="mt-8">
  
  <v-card  elevation="2">
   <!-- <v-card-title class="ttitle white--text">
    <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
     <div class="font-weight-medium">
                 <h3>TVET Institutions<v-icon class="mb-5" color="green">mdi-check-circle-outline</v-icon> </h3>      
                    </div>
   </v-row>
    </v-card-title>
  <v-divider></v-divider>  -->
 <template>
  <v-card>
    <v-card-title class="bady accent-5 white--text">
      <h3>Media</h3>
      <v-spacer></v-spacer>
      <v-btn to="/admin/dashboard/newMedia">Add New</v-btn>
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
    <v-divider></v-divider>
    <div class="ma-2 pa-2">
        <v-spacer></v-spacer>
        
    </div>
    <v-divider></v-divider>
    <v-data-table
      :headers="headers"
      :items="Institutions"
      :search="search"
      :loading="true"
      class="elevation-1"
      primary-key="index"
      fixed-header
      loading-text="Loading Media... Please wait"
    >
      <v-progress-linear v-show="progressBar" slot="progress" color="#0082C6" indeterminate></v-progress-linear>
        <template v-slot:item="{item, index}">
            <tr>
              <td>{{index + 1}}</td>
              <td>{{item.file}}</td>
              <td>{{item.author}}</td>
              <td>{{item.type}}</td>
              <td>{{item.Date}}</td>
              <td>{{item.action}}</td>
              <td>
                <a target="_blank" :href="`/institution/${item._id}`">
                <v-icon aria-hidden="false">
                  mdi-pencil-outline
                </v-icon>
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
  export default {
    data () {
      return {
        headers: [
          {
            text: '#',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'File', value: 'calories' },
          { text: 'Author', value: 'fat' },
          { text: 'Type', value: 'fat' },
          { text: 'Date', value: 'carbs' },
          { text: 'Action', value: 'edit' }
        ],
        desserts: [
          {
            name: 'Frozen Yogurt Frozen Yogurt Frozen',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
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
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },
  }
</script>