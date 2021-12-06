<template>
<router-link to="singlePost">
    <v-card
    :loading="loading"
    class="mx-11 my-11"
    max-width="200"
    
  >
    <template slot="progress">
      <v-progress-linear
        color="#0082C6"
        
        indeterminate
      ></v-progress-linear>
    </template>
  
    <v-img
      height="150"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>{{ news.title }}</v-card-title>

    <v-card-text>
      <div>{{ news.body }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

  </v-card>
</router-link>
</template>
<script>
const baseURL="http://localhost:3000/api_v_1"
  export default {
    data: () => ({
      loading: false,
      selection: 1,
      news:[]
    }),
    beforeCreate(){
          this.getNews()
        },
        created(){
          this.getNews()
        },
        watch:{
          '$route':'fetchData'
        },
    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      async getNews(){
        this.$http.get(`${baseURL}/Admin/posts/post`)
        .then((res)=>{
          this.news = res
          console.log(this.news)
        })
      }
    },
  }
</script>