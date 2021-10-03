<template>
    <v-container >
        <v-card>
        <v-card-title>
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
           
                 <h3 class="ml-4 pt-2">Kaimbaga Institute of Technology<v-icon class="mb-5"  color="green">mdi-check-circle-outline</v-icon> </h3>
                  </v-row>      
                    </div>

   </v-row>
   </v-card-title>
  <v-divider></v-divider> 
<v-card class="pt-4 mb-4" dense>
    <v-simple-table  style="  border: 1px solid green;
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
  <v-row cols="12 " class="d-flex justify-left mb-1 ml-4  pt-4">
     <div class="font-weight-medium">
                 <h3>Licensed Courses</h3>      
    </div>
   </v-row>
    <v-divider></v-divider> 
  <v-card class="pt-4 mb-4">
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
          v-for="(item,i) in desserts"
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
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich Frozen Yogurt',
            calories: 237,
          },
          {
            name: 'Eclair Frozen YogurtFrozen Yogurt',
            calories: 262,
          },
          {
            name: 'Cupcake Frozen YogurtFrozen Yogurt',
            calories: 305,
          },
          {
            name: 'Gingerbread Frozen YogurtFrozen Yogurt',
            calories: 356,
          },
          {
            name: 'Jelly bean Frozen YogurtFrozen Yogurt',
            calories: 375,
          },
          {
            name: 'Lollipop Frozen YogurtFrozen Yogurt',
            calories: 392,
          },
          {
            name: 'Honeycomb Frozen YogurtFrozen Yogurt',
            calories: 408,
          },
          {
            name: 'Donut Frozen YogurtFrozen Yogurt',
            calories: 452,
          },
          {
            name: 'KitKat Frozen YogurtFrozen Yogurt',
            calories: 518,
          },
        ],
      }
    },
  }
</script>