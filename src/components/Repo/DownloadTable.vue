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
            color="blue"
            @click.stop="dialog = true"
            >
            <v-icon>mdi-download</v-icon>
            Download
            </v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-dialog
                      v-model="dialog"
                      max-width="500"
                    >
                   <v-container fluid>
                        <v-card >
          
                         <div class="d-flex justify-center">
                        <v-card-text>
                          <h2>Feature coming Soon.</h2>
                        </v-card-text>
                         </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            <v-icon >mdi-close</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                   </v-container>
                    </v-dialog>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
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