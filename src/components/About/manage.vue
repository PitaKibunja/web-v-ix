<template>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="leader in board" :key="leader.id">
          <v-card class="mb-3" @click="showDialog(leader)">
            <v-img :src="leader.image" height="200"></v-img>
            <v-card-title>{{ leader.name }}</v-card-title>
            <v-card-subtitle>{{ leader.position }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="leader in management" :key="leader.id">
          <v-card class="mb-3" @click="showDialog(leader)">
            <v-img :src="leader.image" height="200"></v-img>
            <v-card-title>{{ leader.name }}</v-card-title>
            <v-card-subtitle>{{ leader.position }}</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
  
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-img :src="selectedLeader.image" height="200"></v-img>
          <v-card-title>{{ selectedLeader.name }}</v-card-title>
          <v-card-subtitle>{{ selectedLeader.position }}</v-card-subtitle>
          <v-card-text>{{ selectedLeader.bio }}</v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </template>
  <script>
  export default {
    data() {
      return {
        board: [
          {
            id: 1,
            name: "John Doe",
            position: "Chairman",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://via.placeholder.com/300x300",
          },
          {
            id: 2,
            name: "Jane Doe",
            position: "Vice Chairman",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://via.placeholder.com/300x300",
          },
        ],
        management: [
          {
            id: 3,
            name: "Bob Smith",
            position: "CEO",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://via.placeholder.com/300x300",
          },
          {
            id: 4,
            name: "Alice Johnson",
            position: "CFO",
            bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: "https://via.placeholder.com/300x300",
          },
        ],
        dialog: false,
        selectedLeader: null,
      };
    },
    methods: {
      showDialog(leader) {
        this.selectedLeader = leader;
        this.dialog = true;
      },
    },
  };
  </script>
  