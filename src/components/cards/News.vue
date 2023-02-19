<template>
    <v-card class="mx-3 my-3" max-width="350" height="100%">
      <template slot="progress">
        <v-progress-linear color="#0082C6" indeterminate></v-progress-linear>
      </template>

      <v-img height="250" :src="`https://picsum.photos/300/200?random=${id}`"></v-img>

      <v-card-title class="text-h5 mt-4">{{title}}</v-card-title>

      <v-card-text class="mb-2">{{body.substring(0,100)+"..."}}</v-card-text>

      <v-card-actions class="d-flex justify-space-between">
        <v-btn text depressed color="primary" :href="`/singlePost/${id}`">Read More</v-btn>
        <v-spacer></v-spacer>
        <v-icon :color="heartClicked ? 'red' : ''" @click="toggleHeartClicked()">mdi-heart-outline</v-icon>
        <span>{{ clickCount }}</span>
      </v-card-actions>
    </v-card>
</template>
<script>
export default {
  props: ['id', 'title', 'body'],
  data: () => ({
    loading: false,
    selection: 1,
    news: [],
    heartClicked: false,
    clickCount: 0
  }),
  methods: {
    toggleHeartClicked() {
      this.heartClicked = !this.heartClicked;
      if (this.heartClicked) {
        this.clickCount++;
        // send click data to database
      }
    }
  },
  computed: {
    clickCount() {
      return this.clickCount;
    }
  }
}
</script>

<style scoped>
.v-img {
  object-fit: cover;
}

.v-card-title {
  font-weight: bold;
}

.v-card-actions {
  border-top: 1px solid #ccc;
}
</style>
