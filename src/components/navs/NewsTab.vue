<template>

  <v-card >
    <v-toolbar
      color="white"
     class=" pt-0"
      center-active
      flat 
      
    >
        <v-tabs
          v-model="tab"
          class="bady white--text d-flex justify-center"
          align-with-title

        >
          <v-tabs-slider color="supu"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item._id"
           dark
          >
          <span class="white--text text-center justify-center p-4" >
             {{ item }}
          </span>
           
          </v-tab>
        </v-tabs>

    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in posts"
        :key="item"
      >
        <v-card flat>
        <v-row
        :align="center"
        no-gutters
        style="height: auto;"
      >
        <v-col
        v-for="n in 8"
        :key="n"
        >
            <News />

        </v-col>
              
      </v-row> 
          
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
const baseURL="http://localhost:3000/api_v_1"
import News from '../cards/News.vue'
  export default {
    components:{
      News
    },
    data () {
      return {
        tab: null,
        items: [],
        posts:[],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
     beforeCreate(){
      this.fetchTabs()
      this.fetchPosts()
      console.log(this.fetchTabs())
      console.log(this.fetchPosts())
    },
    created(){
      this.fetchTabs()
      this.fetchPosts()
     
    },
    watch:{
      '$route':'fetchTabs,fetchPosts'
    },
    methods:{
      async fetchPosts(){
          try{
          this.$http.get(`${baseURL}/Admin/posts/post`)
          .then((res)=>{
            this.posts=res.data
            console.log(res.data)
          })
        }catch(err){
          this.news
        }
      },
      async fetchTabs(){
        try{
          this.$http.get(`${baseURL}/Admin/posts/category`)
          .then((res)=>{
            this.items=res.data
            console.log(res.data)
          })
        }catch(err){
          this.news
        }
      }
    }
  }
</script>