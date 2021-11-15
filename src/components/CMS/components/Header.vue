<template>
        <v-app-bar
    app
      color="ttitle"
      elevate-on-scroll
      elevation="4"
      dark
    >
      <v-app-bar-nav-icon @click="$emit('handeDrawer')"></v-app-bar-nav-icon>
      <v-toolbar-title>TVET Authority</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="6">
          <v-form class="mt-5">
            <v-text-field
            rounded
            outlined
            dense
            placeholder="Search..."
            append-icon="mdi-magnify"
            ></v-text-field>
          </v-form>
      </v-col>
      

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>