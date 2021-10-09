<template>
    <v-container class="mt-8">
          <v-card elevation="2">
               
            <v-card-title>
                 <v-row cols="12 " class="d-flex justify-center mb-1 ml-4  pt-2">
                    <div class="font-weight-medium">
                
                 <h3>Standards Development</h3>      
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
            
            <v-divider></v-divider>
            
            <div>
                <h4 class="d-flex text-h6 justify-center">TVET fundamental standards and guidelines</h4>
            </div>
            <v-divider></v-divider>
            <v-container fluid>
               <v-container fluid>
                      <v-row cols="12 " class="d-flex justify-start mb-1 ml-4  pt-2">
                      <v-card
                         class="mx-auto ma-2 pa-1"
                         max-width="344"
                         
                         v-for="std in standards" :key="std"
                 >
    <v-card-text>
      <div>
            <v-row>
              <v-col cols="6" class="mt-4">{{ std.code }}</v-col>
            </v-row>
           </div>
           
      <p class="text-h6 text--primary pa-2" color="primary">
             <v-divider></v-divider>
         <router-link :to="std.link" tag="span" style="cursor: pointer">
          {{ std.title }}
        </router-link>
      </p>
      <p>
           <v-row class="d-flex justify-center mb-1 pt-1" width="200" flat>
         
          <v-img small src="../../assets/tveta_logo.png"></v-img>
          </v-row>
      
      </p>
      <div class="text--primary">
             {{ std.content }}
      </div>
          <div class="pt-2">
              <p class="text-semibold">Edition:{{ std.edition }}</p>
              
          </div>
      <div class="text-h6 pt-1">
          Ksh,{{ std.price }}
      </div>
    </v-card-text>
          <v-divider></v-divider>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
      <v-icon>mdi-cart-outline</v-icon>
        Buy Now 

      </v-btn> 
       <v-divider
      class="mx-4"
      vertical
    ></v-divider>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Subscribe
      </v-btn>
      
    </v-card-actions>
    
                </v-card>
                  </v-row>
               </v-container>
            
            </v-container>
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
          text: 'Standards Development',
          disabled: true,
          href: '/standards',
        }
      ],
        standards: [
          {
            code:'TVETS 01:2019',
            title:'CBETA Standards and Guidelines.',
            content:'TVET Standard — Competence-Based Education, Training and Assessment (CBETA) — Requirements and Guidelines',
            edition:'First',
            price:'4,560',
            link:'/standards/:id' 
          },
          {
            code:'TVETS 02:2019',
            title:'The PLAR Standards and guidelines',
            content:'TVET Standard — Prior Learning Assessment and Recognition (PLAR) — Requirements and Guidelines',
            edition:'First',
            price:'2,570',
            link:'/standards/:id' 
          },
          {
            code:'TVETS 03:2019',
            title:'The Trainers Qualification Framework Standards TQF',
            content:'TVET Standard — CBET Trainers Qualification Framework — Part 1: General Requirements and Guidelines',
            edition:'First',
            price:' 2,240',
            link:'/standards/:id' 
          },
          {
            code:'TVETS 04:2019',
            title:'The National Polytechnic Standards and guidelines',
            content:' TVET Standard — National Polytechnics — Requirements and Guidelines',
            edition:'First',
            price:'4,200',
            link:'/standards/:id' 
          },
          {
            code:'TVETS 05:2019',
            title:'Open Distance and E-learning Standards (ODeL)',
            content:' TVET Standard — Open, Distance and E-Learning (ODeL) — Requirements and Guidelines',
            edition:'First',
            price:'2,570',
            link:'/standards/:id' 
          },
          {
            code:'TVETS 06:2019',
            title:'Centre of Excellence Standards and Guidelines',
            content:'TVET Standard — Centre of Excellence — Requirements and Guidelines',
            edition:'First',
            price:'2,360',
            link:'/standards/:id' 
          }

        ],
      }
    },
  }
</script>