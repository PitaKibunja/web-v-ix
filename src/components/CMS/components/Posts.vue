<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-start mb-1 ml-4  pt-2">
                   <v-btn to="/admin/dashboard/newpost">Add a new post</v-btn>
                    </v-row>
            </v-card-title>

                </v-card>
            </v-col>
            <v-col cols="12">
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                   <v-col><a href="#" style="text-decoration: none;">All(59)</a></v-col>
                       <v-divider
                        class="mx-4"
                        dark
                        vertical
                        ></v-divider>
                    <v-col><a href="#" style="text-decoration: none;">Published(11)</a></v-col>
                        <v-divider
                        class="mx-4"
                        dark
                        vertical
                        ></v-divider>
                     <v-col><a href="#" style="text-decoration: none;">Drafts(23)</a></v-col>
                       <v-divider
                        class="mx-4"
                        dark
                        vertical
                        ></v-divider>
                      <v-col><a href="#" style="text-decoration: none;">Mine(4)</a></v-col>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
                  <v-data-table
                    :headers="headers"
                    :items="Posts"
                    :search="search"
                    :loading="true"
                    class="elevation-1"
                    primary-key="index"
                    fixed-header
                    loading-text="Loading Posts... Please wait"
                >
                <v-progress-linear v-show="progressBar" slot="progress" color="#0082C6" indeterminate></v-progress-linear>
                    <template v-slot:item="{item, index}">
                      <tr>
                        <td>{{index + 1}}</td>
                        <td>{{item.title}}</td>
                        <td>{{item.status}}</td>
                        <td>{{item.author}}</td>
                        <td>{{item.createdAt}}</td>
                        <td>{{item.category}}</td>
                        <td>
                          <v-btn  icon color="green">
                             <a target="_blank" :href="`/institution/${item._id}`">
                              <v-icon small>mdi-pencil</v-icon>
                            </a>
                            
                          </v-btn>
                          <v-btn icon color="green">
                             <a target="_blank" :href="`/institution/${item._id}`">
                              <v-icon small>mdi-eye</v-icon>
                            </a>
                            
                          </v-btn>
                          <v-btn  icon  color="pink" style="text-decoration: none">
                             <a target="_blank" :href="`/institution/${item._id}`">
                              <v-icon small>mdi-delete-forever</v-icon>
                            </a>
                            
                          </v-btn>
                          

                        </td>
                      </tr>
                  </template>
                    
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
const baseURL="http://localhost:3000/api_v_1"
  export default {
    data () {
      return {
        progressBar: true,
        headers: [
          {
            text: '#',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Post Title', value: 'title' },
          { text: 'Status', value: 'calories' },
          { text: 'Author', value: 'fat' },
          { text: 'Date', value: 'carbs' },
          { text: 'Category', value: 'carbs' },
          { text: 'Edit', value: 'edit' }
        ],
        Posts:[]
        
      }
    },
    beforeCreate(){
      this.fetchPosts()

    },
    created(){
      this.fetchPosts()
    },
    watch:{
      '$route':'fetchPosts'
    },
    methods: {
      async fetchPosts(){
        try {
         const rawPostsData=await this.$http.get(`${baseURL}/Admin/posts/post`)
         this.Posts=rawPostsData.data
         this.progressBar= false
        } catch (error) {
          this.Posts
        }
      }
    },
  }
</script>