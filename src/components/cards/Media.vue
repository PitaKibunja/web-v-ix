<template>
<div class="container">
  <v-row class="mt-4">
  <v-card
    class="mx-1 pa-1"
    color="#26c6da"
    dark
    max-width="280"
    v-for="media in medias"
   :key="media"
   style="height:auto;"

  >
<v-col>
   <v-card-title>
      <v-icon
        large
        left
      >
        {{ media.icon }}
      </v-icon>
      <span class="text-h6 font-weight-light">{{media.name}}</span>
    </v-card-title>

    <v-card-text class="text font-weight-bold">
     {{ media.content }}
    </v-card-text>

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
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
           {{media.icol}}
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
</v-col>
   
  </v-card>
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