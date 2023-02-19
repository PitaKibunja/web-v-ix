<template>
  <v-card>
    <v-toolbar color="white" class="pt-0" center-active flat>
      <v-tabs v-model="tab" class="bady white--text d-flex justify-center" align-with-title>
        <v-tabs-slider color="supu"></v-tabs-slider>
        <v-tab v-for="item in items" :key="item._id" dark>
          <span class="white--text text-center justify-center p-4">{{ item }}</span>
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card :key="item" flat>
          <v-row no-gutters>
            <v-col v-for="item in filteredPosts" :key="item._id" cols="12" sm="4">
              <News :id="item._id" :title="item.title" :body="item.body" />
            </v-col>
          </v-row>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import News from "../cards/News.vue";

const baseURL = "https://tveta-web-backend.onrender.com/api_v_1";

export default {
  components: {
    News,
  },
  data() {
    return {
      tab: null,
      items: [],
      posts: [],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  async beforeCreate() {
    await this.fetchTabs();
    await this.fetchPosts();
  },
  created() {
    this.fetchTabs();
    this.fetchPosts();
  },
  watch: {
    $route: "fetchTabs,fetchPosts",
  },
  computed: {
    filteredPosts() {
      if (!this.tab) {
        return this.posts;
      } else {
        return this.posts.filter((post) => post.category === this.tab);
      }
    },
  },
  methods: {
    async fetchPosts() {
      try {
        const res = await this.$http.get(`${baseURL}/Admin/posts/post`);
        this.posts = res.data;
      } catch (err) {
        console.log(err);
      }
    },
    async fetchTabs() {
      try {
        const rawData = await this.$http.get(`${baseURL}/Admin/posts/category`);
        this.items = rawData.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
