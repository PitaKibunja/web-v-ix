<template>
    <v-container class="mt-8">
          <v-card elevation="2">
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Frequently Asked Questions</h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card>
                <v-card-title >
                 <v-row cols="8" class="d-flex justify-center mb-1 ml-4  pt-2">
                    
                      <h3 class="pt-4 ml-8">How can we assist you today?</h3>
                      <v-spacer></v-spacer>
                            <v-text-field
                                placeholder="Search"
                                prepend-inner-icon="mdi-magnify"
                                max-width="500"
                                class="mr-8"
                                 ></v-text-field>
                       
                    </v-row>
            </v-card-title>
            </v-card>
            <v-container fluid class="supu">
              
                <v-row
      no-gutters
      
    >

          <v-btn 
        class="bady white--text ma-4 pa-8 ma-2 text-white font-weight-medium"
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
            link:'/faqs/questions'
          },{
            name: 'MIS Institution Registration',
            icon:'mdi-help',
            link:'/faqs/questions'
          },{
            name: 'MIS Institution Registration ',
            icon:'mdi-help',
            link:'/faqs/questions'
          },{
            name: 'MIS Institution Registration ',
            icon:'mdi-help',
            link:'/faqs/questions'
          },
          {
            name: 'Trainer Registration Process',
            icon:'mdi-help',
            link:'/faqs/questions'
          },
          {
            name: 'MIS Letter of No Objection',
            icon:'mdi-help',
            link:'/faqs/questions'
          },
            {
            name: 'TVET Standards and Guidelines',
            icon:'mdi-help',
            link:'/faqs/questions'
          },
            {
            name: 'Access to Outreach Services',
            icon:'mdi-help',
            link:'/faqs/questions'
          },
            {
            name: 'TVET Trainers Employment',
            icon:'mdi-help',
            link:'/faqs/questions'
          },

        ],
      }
    },
  }
</script>