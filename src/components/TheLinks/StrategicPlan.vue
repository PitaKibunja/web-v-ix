<template>
<v-container >
      <v-carousel :show-arrows="false" :hide-delimiters="true" class="carousel">
    <VuetifyPdf
      :url="url"
    />
<v-img :src="url"></v-img>
  </v-carousel>
</v-container>
</template>

<script>
import VuetifyPdf from "vuetify-pdfjs/src/App.vue";

export default {
  components: {
    VuetifyPdf
  },
    data: () => ({
    url:'https://www.tveta.go.ke/wp-content/uploads/2020/07/TVETA-Strategic-Plan-Dec-2019.pdf'
  })
}
</script>

<style>
.carousel {
  background-color: #606f7b;
}
</style>