<template>
    <v-container class="mt-8">
          <v-card elevation="2">
               
            <v-card-title class="ttitle white--text">
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>MIS Institution Registration</h3>      
                    </div>
                    </v-row>
            </v-card-title>
            <v-divider></v-divider>
             <div>
                    <v-breadcrumbs :items="items">
                        <template v-slot:divider>
                            <v-icon>mdi-chevron-right</v-icon>
                        </template>
                    </v-breadcrumbs>
            </div>
            <v-card elevation="3" style="margin: 0px; padding:0px; background: white;  width: 100%">
                <div class="ma-2 pa-2">
                        <v-expansion-panels elevation="3" focusable class="mb-6 ma-4 pa-4">
                         <v-expansion-panel
                            v-for="quiz in Questions"
                            :key="quiz"
                        >
                    <v-expansion-panel-header class="bady white--text font-weight-medium" expand-icon="mdi-menu-down">
                  {{ quiz.quiz }} 
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                        {{ quiz.answer }}
                    </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
                </div>
            </v-card>
          </v-card>
    </v-container>
</template>
<script>
  export default {
    data () {
      return {
          items: [
        {
          text: 'Home',
          disabled: false,
          href: '/',
        },
        {
          text: 'FAQs',
          disabled: false,
          href: '/faqs',
        },
        {
          text: 'Questions',
          disabled: true,
          href: '/faqs/questions',
        },
      ],
        Questions: [
          {
            quiz: 'What is the TVET MIS',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.', 
          
          },{
            quiz: 'How to Register an exsisting Institution?',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.',
            
          },{
            quiz: 'How to download Certificate from MIS Platform',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.',
            
          },{
            quiz: 'How to handle Tickets on MIS platform',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.',
            
          },{
            quiz: 'How to change Institution Location from the MIS',
            answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laudantium voluptate aut ea, voluptatem ut aspernatur assumenda dignissimos excepturi nam earum iste laboriosam nemo reiciendis cupiditate ullam sint labore incidunt.',
            
          }
        ],
      }
    },
  }
</script>