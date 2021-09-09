<template>
<div class="container">
      <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            <p>Institution Name</p>
          </th>
        </tr>
        <tr>
        <th class="text-left">
                   <h5>Registration Details.</h5>    
          <td>Reg No. </td>
          <td>Registration Date: 1/1/2016</td>
          <td>Registration Expiry Date: 1/1/2021</td>
          </th>
                          <tr>
                    <th>
                      <h5>Geographical</h5>
                    <td>County</td>
                    <td>Location</td>
                    <td>Land Mark</td>
                    </th>
                    </tr>
      </thead>
    </template>
  </v-simple-table>
</div>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>