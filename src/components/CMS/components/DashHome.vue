<template>
    <v-container fluid class="mt-0">
        <v-card elevation="4">
            <v-card-title>
                <span>This is the home screen</span>
            </v-card-title>
            <v-container fluid>
                <v-row>
                    <v-col cols="12" md="6" v-for="i in 10" :key="i">
                        <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <p class="text-h4 text--primary">
        be•nev•o•lent
      </p>
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name:'DashHome'
}
</script>
<style scoped>

</style>