<template>
    <v-container class="mt-8">
      <v-card elevation="2">
        <v-card-title class="ttitle white--text">
          <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
            <div class="font-weight-medium">
              <h3>Search Results...</h3>
            </div>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
        <div>
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
          </v-breadcrumbs>
        </div>
        <v-divider></v-divider>
        <v-container class="white--text">
          <v-row>
            <v-col cols="12" sm="8" md="6" offset-sm="2" offset-md="3">
              <v-text-field
                v-model="searchQuery"
                outlined
                dense
                placeholder="Search..."
                append-icon="mdi-magnify"
                @keyup.enter="searchDB"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-container v-if="searchResult.length === 0 && isLoading">
            <v-row cols="12" class="d-flex justify-center">
              <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
            </v-row>
          </v-container>
          <v-container v-for="item in searchResult" :key="item.results">
            <v-card class=" mx-auto my-4">
              <v-row cols="12" class="d-flex justify-left  pt-4">
                <!-- <div class=" font-weight-medium">
                  <h3 class="d-flex justify-center">{{ item}}</h3>
                </div> -->
                <!-- <v-card > -->
                    <!-- <router-link :to="link" class="text-decoration-none"> -->
                        <v-card-title>title</v-card-title>
                        
                    <!-- </router-link> -->
            <v-card-text>
                <v-divider></v-divider>
                 {{ item }}
            </v-card-text>
            <!-- </v-card> -->
              </v-row>
            </v-card>
          </v-container>
        </v-container>
      </v-card>
    </v-container>
  </template>
  
  <script>
  const baseURL = "http://localhost:3000/api_v_1/";
  
  export default {
    data() {
      return {
        searchQuery: '',
          searchResult: ['orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industryorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when ans standard dummy text ever since the 1500s, when anorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an',
              'orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an....', 'kesho'],
        isLoading: false,
      }
    },
    watch: {
    //   searchQuery: function() {
    //     this.searchDB();
    //     },
        '$route':'searchDB'
    },
    methods: {
      async searchDB() {
        try {
            this.isLoading = true;
          
          const res = await fetch(`${baseURL}/search/searchquery/${this.searchQuery}`);
          console.log(res);
          if (!res.ok) {
            const message = `An error has occurred: ${res.status} - ${res.message}`;
            throw new Error(message);
          }
          const data = await res.json();
          this.searchResult = data;
        } catch (error) {
          this.searchResult = [];
        } finally {
          this.isLoading = false;
        }
      }
    }
  }
  </script>
  