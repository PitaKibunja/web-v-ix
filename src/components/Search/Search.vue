<template>
  <v-container class="mt-8">
    <v-card elevation="2">
      <v-card-title class="ttitle white--text">
        <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
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
              @keyup="debounceSearch"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-container v-if="searchResult.length === 0 && isLoading">
          <v-row cols="12" class="d-flex justify-center">
            <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
          </v-row>
        </v-container>
        <v-container v-for="item in searchResult" :key="item.id">
          <a :href="'/search/' + item.id" class="search-result-link">
            <v-card class="mx-auto my-4 search-result-card">
              <v-row cols="12" class="d-flex justify-left pt-4">
                <v-card-title class="search-result-title">{{ item.title }}</v-card-title>
                <v-card-text class="search-result-body">{{ item.body.substring(0, 200) }}</v-card-text>
              </v-row>
            </v-card>
          </a>
        </v-container>
      </v-container>
      <v-container v-if="errorMessage" class="my-4">
        <v-alert dense type="error">{{ errorMessage }}</v-alert>
      </v-container>
      <v-container v-if="searchHistory.length > 0">
        <h4 class="my-4">Search history:</h4>
        <v-list>
          <v-list-item
            v-for="query in searchHistory"
            :key="query"
            @click="searchQuery = query; searchDB();"
          >
            <v-list-item-title>{{ query }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        searchQuery: '',
        searchResult: [],
        isLoading: false,
        errorMessage: '',
        searchHistory: [],
        debounceTimeout: null,
        debounceDelay: 500
      }
    },
    methods: {
      async searchDB() {
  if (!this.searchQuery) {
    return;
  }
  this.isLoading = true;
  this.errorMessage = '';
  const url = `http://localhost:3000/api_v_1/search?q=${this.searchQuery}`;
  try {
    const response = await axios.get(url);
    this.searchResult = response.data;
    console.log(this.searchResult);
    this.searchHistory.push(this.searchQuery);
  } catch (error) {
    this.errorMessage = `Error searching for ${this.searchQuery}`;
    console.error(error);
  }
  this.isLoading = false;
},

      debounceSearch() {
        clearTimeout(this.debounceTimeout)
        this.debounceTimeout = setTimeout(() => {
          this.searchDB()
        }, this.debounceDelay)
      }
    },
    watch: {
      searchQuery() {
        this.debounceSearch()
      }
    }
  }
</script>

