<template>
    <v-container class="mt-8">
          <v-card elevation="2">
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Frequently Asked Questions</h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card>
                <v-card-title>
                 <v-row cols="8" class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>How can we assist you today?</h3>  <br/>    
                    </div>
                    </v-row>
                    <v-row>
                        <h6></h6>
                    </v-row>
                    <v-row  class="d-flex justify-between mb-1 ml-4  pt-2">
                        <v-col >
                            <v-text-field
                                placeholder="Search"
                                prepend-inner-icon="mdi-magnify"
                                max-width="300"
                                dense
                                 ></v-text-field>
                        </v-col>
                    </v-row>
            </v-card-title>
            </v-card>
            <v-container fluid>
              <v-card class="d-flex align-content-start flex-wrap ma-2 pt-2" elevation="3">
                <v-row
      no-gutters
      
    >

          <v-btn 
        class="ma-4 pa-8 ma-2 text-white font-weight-medium"
        large
        
        v-for="n in faqs"
        max-width="400"
       
        :key="n"
        :to="n.link"
        >
            {{ n.name }} <v-icon>{{ n.icon }}</v-icon>
        </v-btn>
    
        
         <!-- <v-row align="center">
             <v-col
        cols="12"
       
        class="flex-grow-0 flex-shrink-0 pa-2 ma-2 pt-n8"
      >
        
        <v-btn 
        class="ma-12 pa-12"
        large
        >
            MIS Registration Process <v-icon>mdi-frequently-asked-questions</v-icon>
        </v-btn>
          
      </v-col>    <v-col
        cols="4"
       
        class="flex-grow-0 flex-shrink-0 pa-2 ma-2 pt-n8"
      >
        
        <v-btn 
        class="ma-12 pa-12"
        large
        >
            MIS Registration Process <v-icon>mdi-frequently-asked-questions</v-icon>
        </v-btn>
          
      </v-col><v-col
        cols="4"
       
        class="flex-grow-0 flex-shrink-0 pa-2 ma-2 pt-n8"
      >
        
        <v-btn 
        class="ma-12 pa-12"
        large
        >
            MIS Registration Process <v-icon>mdi-frequently-asked-questions</v-icon>
        </v-btn>
          
      </v-col><v-col
        cols="4"
       
        class="flex-grow-0 flex-shrink-0 pa-2 ma-2 pt-n8"
      >
        
        <v-btn 
        class="ma-12 pa-12"
        large
        >
            MIS Registration Process <v-icon>mdi-frequently-asked-questions</v-icon>
        </v-btn>
          
      </v-col><v-col
        cols="4"
       
        class="flex-grow-0 flex-shrink-0 pa-2 ma-2 pt-n8"
      >
        
        <v-btn 
        class="ma-12 pa-12"
        large
        >
            MIS Registration Process <v-icon>mdi-frequently-asked-questions</v-icon>
        </v-btn>
          
      </v-col>
         </v-row> -->
      
    </v-row>
            </v-card>
            </v-container>
          </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
        faqs: [
          {
            name: 'MIS Institution Registration',
            icon:'mdi-help',
            link:'/questions'
          },{
            name: 'MIS Institution Registration',
            icon:'mdi-help',
            link:'/questions'
          },{
            name: 'MIS Institution Registration ',
            icon:'mdi-help',
            link:'/questions'
          },{
            name: 'MIS Institution Registration ',
            icon:'mdi-help',
            link:'/questions'
          },
          {
            name: 'Trainer Registration Process',
            icon:'mdi-help',
            link:'/questions'
          },
          {
            name: 'MIS Letter of No Objection',
            icon:'mdi-help',
            link:'/questions'
          },
            {
            name: 'TVET Standards and Guidelines',
            icon:'mdi-help',
            link:'/questions'
          },
            {
            name: 'Access to Outreach Services',
            icon:'mdi-help',
            link:'/questions'
          },
            {
            name: 'TVET Trainers Employment',
            icon:'mdi-help',
            link:'/questions'
          },

        ],
      }
    },
  }
</script>