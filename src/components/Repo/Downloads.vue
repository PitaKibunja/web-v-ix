<template>
<v-container class="mt-8">
          <v-card elevation="2">
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
     <div class="font-weight-medium">
                
                 <h3> Downloads<v-icon large medium color="green">mdi-briefcase-download-outline</v-icon> </h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
                    <v-card class="ma-1">
            <v-toolbar
            color="white"
            class=" pt-0"
            center-active
            flat 
            
            >


            <v-tabs
            v-model="tab"
            align-with-title
            >
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab
            v-for="item in items"
            :key="item"
           
          >
          <span class="text-center p-4" >
             <v-icon>{{ item.icon }}</v-icon>{{ item.text }}
          </span>
           
          </v-tab>
        </v-tabs>

    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card flat>
        <v-row
        :align="center"
        no-gutters
        style="height: auto;"
      >
        <v-col
        >
            
                <DownloadTable/>
            
            
        </v-col>
              
      </v-row> 
          
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
          </v-card>
</v-container>  
 
</template>
<script>
import DownloadTable from './DownloadTable.vue'
  export default {
      components:{
          DownloadTable
      },
    data () {
      return {
          tab: null,
        items: [
            { text: 'Acts & Policies', icon: 'mdi-scale-balance' },
            { text:  'Standards', icon: 'mdi-flag' },
            { text: 'Forms', icon: 'mdi-file' },
            { text: 'Publications', icon: 'mdi-book-open-page-variant-outline' },
            { text: 'Reports', icon: 'mdi-file-document-edit-outline' },
            { text: 'General', icon: 'mdi-text-box-multiple' },
          
        ],
     
      }
    },
  }
</script>