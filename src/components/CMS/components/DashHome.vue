<template>
    <v-container fluid class="mt-0">
       <v-row >
         <v-col v-for="item in dashItems" :key="item">
        <v-card
    class="mx-auto"
    max-width="250"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        10
      </p>
      <hr>
      <div class="text--primary pa-2">
        <h2>{{item}}</h2>
      </div>
    </v-card-text>
  </v-card>
         </v-col>
       </v-row>
       <v-row>
         <v-col>
            <v-card>
              <v-card-title class="bady white--text">
            <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
              <div class="font-weight-medium">
                <h3>User Statistics</h3>
              </div>
            </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <div class="ma-2 pa-1">
        <p>
          List of activities in chronological order. The activities can be update of posts,  updating of pages

        </p>
      </div>
           </v-card>
         </v-col>
         <v-col>
          <v-card>
              <v-card-title class="bady white--text">
            <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
              <div class="font-weight-medium">
                <h3>Recent Activities</h3>
              </div>
            </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <div class="ma-2 pa-1">
        <p>
          List of activities in chronological order. The activities can be update of posts,  updating of pages

        </p>
      </div>
           </v-card>
         </v-col>
       </v-row>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
      reveal: false,
      dashItems:[
        'Pages',
        'Posts',
        'Downloads',
        'Users'

      ]
    }),
  }
</script>
<style scoped>

</style>