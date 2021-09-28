<template>
  <div class="text-center">
    <v-menu
      top
      :offset-x="offset"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class=" mb-0"
          fab
          small
          elevation="2"
        >
            <v-icon size="30" dark>
                {{ link.icon }}
            </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Trainer Login' },
        { title: 'Institution Login' },
        { title: 'Institution Registration Process' },
        { title: 'Trainer Registration Process' },
      ],
      offset: true,
    }),
  }
</script>