<template>
  <div class="container my-4">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4" v-for="(media, index) in medias" :key="index">
        <v-card class="pa-4" color="#26c6da" dark>
          <v-card-title class="text-h5 font-weight-light">
            <v-icon large left>{{ media.icon }}</v-icon>
            {{ media.name }}
          </v-card-title>

          <v-card-text class="text font-weight-bold">{{ media.content }}</v-card-text>

          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-4"
                  alt=""
                  src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                ></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="font-weight-bold mb-1">Evan You</v-list-item-title>
                <v-list-item-subtitle>{{ media.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-row align="center">
                <v-icon class="mr-1">{{ media.icol }}</v-icon>
                <span class="subheading mr-2">{{ media.likes }}</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">{{ media.shares }}</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: () => ({
      medias: [
        {icon:'mdi-facebook',name:'Facebook',icol:'mdi-thumb-up-outline',content:"Facebook Latest Content goes here"},
        {icon:'mdi-twitter', name:'Twitter',icol:'mdi-heart' ,content:"Twitter Latest content goes here all of it"},
        {icon:'mdi-instagram', name:'Instagram',icol:'mdi-heart' ,content:"Instagram Latest content goes here all of it"},
        {icon:'mdi-youtube', name:'Youtube', icol:'mdi-youtube-subscription' ,content:"Youtube Latest content goes here all of it"}
      ]
      //
    })
  }
</script>