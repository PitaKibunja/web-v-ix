<template>
  <div>
    <v-app-bar
      color="primary accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>TVET Authority</v-toolbar-title>

      <v-spacer></v-spacer>
      <template>
  <div class="text-center">
    <v-menu
      open-on-hover
      top
      offset-y
      tile
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>

      <v-list>
          <v-list-item
            v-for="n in quick"
            :key="n"
            @click="() => {}"
            :to="n.link"
          >
            <v-list-item-title>{{ n.Staff }}</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-menu>
  </div>
</template>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in quick"
            :key="n"
            @click="() => {}"
            :to="n.link"
          >
            <v-list-item-title>{{ n.Staff }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      quick:[
        {Staff:'Staff mail',link:'/'},
        {Staff:'Staff Portal',link:'/institution'},
        {Staff:'Staff Portal',link:'/downloads'},
        {Staff:'Staff Portal',link:'/institution'},
      ]
    }),
  }
</script>