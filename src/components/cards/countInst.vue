<template>
    <v-container>
      <v-row>
        <v-col
          class="d-flex justify-center"
          cols="4"
          sm="4"
          md="4"
          lg="4"
          v-for="(category, index) in categories"
          :key="index"
        >
          <v-card class="ma-3">
            <v-card-title>{{ category.name }}</v-card-title>
            <v-card-text class="text-h1">{{ category.count }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        categories: [
          {
            name: "VTC",
            count: 0,
          },
          {
            name: "TVC",
            count: 0,
          },
          {
            name: "NP",
            count: 0,
          },
        ],
      };
    },
    mounted() {
      window.addEventListener("scroll", this.updateCounts);
    },
    methods: {
      updateCounts() {
        for (let i = 0; i < this.categories.length; i++) {
          const category = this.categories[i];
          const count = Math.floor(window.scrollY / (i + 1));
          this.$set(category, "count", count);
        }
      },
    },
    beforeDestroy() {
      window.removeEventListener("scroll", this.updateCounts);
    },
  };
  </script>
  
  <style scoped>
  .v-card {
    padding: 24px;
  }
  </style>
  