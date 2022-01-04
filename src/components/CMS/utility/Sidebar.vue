<template>
       <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-sheet
        color="grey lighten-4"
        class="pa-4 pt-8" 
      >
      <div class="d-flex justify-center">
        <v-avatar
          class="mb-4 d-flex justify-center"
          color="darken-1"
          size="64"
        >
        
          <v-img src="../tveta_logo.png" max-width="50"></v-img>
        
        </v-avatar>
        </div>
        <div class="d-flex justify-center">Super Admin</div>
      </v-sheet>
      <v-divider></v-divider>
      <v-list shaped>
        <v-list-item
          v-for="[icon, text,linked] in links"
          :key="icon"
          :to="linked"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

</template>
<script>

  export default {
    props:["drawer"],
    data: () => ({
      selectedItem: 1,
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cogs'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      links: [
        ['mdi-view-dashboard', 'Dashboard','/admin/dashboard/dashhome'],
        // ['mdi-account-group-outline', 'Users'],
        ['mdi-text-box-plus-outline', 'Pages','/admin/dashboard/pages'],
        ['mdi-folder-multiple-image', 'Media','/admin/dashboard/media'],
        ['mdi-file-document-edit-outline', 'Posts','/admin/dashboard/posts'],
        ['mdi-cogs', 'Settings','/admin/dashboard/settings'],
        ['mdi-account-circle', 'Users','/admin/dashboard/management'],
        // ['mdi-logout', 'Logout'],
      ],
    }),
  }
</script>