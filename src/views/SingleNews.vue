<template>
   <v-container fluid class="d-flex justify-center mb-2  mt-1 " >

    <v-row no-gutters class="mt-10">
      <v-col
        cols="12"
        sm="6"
        md="8"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
           <Post :heading="selectedPost.title" :post="selectedPost.body" />
           <v-divider></v-divider>
        </v-card>
      </v-col>
      <v-col
        cols="2"
        md="4"

      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
        <h5 class="mb-6">Related Posts({{ spCategory }})</h5>
        <v-divider></v-divider>

    <v-card
    class="mx-auto mt-2 mb-2"
    max-width="344"
    outlined
    v-for="post in Posts" :key="post.title"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          {{ related.title }}
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ related.title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ related.body }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>


        </v-card>
      </v-col>
    </v-row>
   </v-container>

</template>
<script>
import Post from '../components/Posts/Post.vue'
const baseURL="https://tveta-backend.herokuapp.com/api_v_1"
export default {
components:{
  Post
},
data(){
  return{
    selectedPost:[],
    spCategory:'',
    relatedPost:[],
    Posts:[],
    postId:''
  }
},
     beforeCreate(){
      this.fetchSinglePost()
      this.fetchRelatedPosts()

    },
    created(){
      const poId=this.$route.params.postId
      this.postId=poId
      this.fetchSinglePost()
      this.fetchRelatedPosts()

    },
    watch:{
      '$route':'fetchSinglePost()'
    },
    methods:{
      async fetchSinglePost(){
        try{
          this.$http.get(`${baseURL}/Admin/posts/post/${this.postId}`)
          .then((res)=>{
            this.selectedPost=res.data
            this.spCategory=res.data.category


          })
        }catch(err){
          this.selectedPost
        }
      },
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
      }
      ,
      async fetchRelatedPosts(){
        try{
           this.$http.get(`${baseURL}/Admin/posts/post/post`)
          .then((res)=>{
            this.relatedPost=res.data

          })
        }catch(err){
          this.relatedPost

        }
      }
    }

}
</script>
