<template>
  <v-card class="  mb-8  pt-2" >
      <v-simple-table fixed-header height="500" class="pa-4 ma-2">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
           Doc Type
          </th>
          <th class="text-left">
            Act
          </th>
            <th class="text-left">
            Upload Date
          </th>
        <th class="text-left">
            Size
          </th>
        <th class="text-left">
            Download
          </th>

        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,i) in desserts"
          :key="item.name"
        >
          <td>{{ i }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.calories }}</td>
          <td>
            <v-btn
            class="ma-2"
            outlined
            color="indigo"
            >
            Download
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  </v-card>
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