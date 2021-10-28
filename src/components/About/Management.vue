<template>
  <v-container class="mt-8">
    <v-card elevatio="2" class="mb-2">
      <v-card-title class="ttitle white--text">
        <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
          <div class="font-weight-medium">
            <h3>Our Leadership</h3>
          </div>
        </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <div class="">
        <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
      </div>
      <v-divider></v-divider>
      <v-container fluid>
        <v-card>
          <v-card-title class="ttitle white--text">
                <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
                  <div class="font-weight-medium">
                    <h5>Board Members</h5>
                  </div>
                </v-row>
          </v-card-title>
          <v-divider></v-divider>
        </v-card>
        
        <v-card class="supu white--text d-flex justify-space-between mb-1 pt-4"  flat tile>
          <v-row cols="12" class="d-flex justify-center mb-1 pt-2">
          
            <v-card v-for="n in members" :key="n" class="pa-1 ma-1" elevation="4" tile>
              
              <div class="text-center">
                <v-card @click.stop="dialog = true" width="230" height="400" v-bind="attrs" v-on="on" class="ma-4 pa-3">
                <v-img :src="n.img"></v-img>
                <v-card-text>{{ n.name }}<br/><br/>{{ n.position }}</v-card-text>
                
              </v-card>
              </div>
            </v-card>
             <v-dialog
                      v-model="dialog"
                      max-width="500"
                    >
                   <v-container fluid>
                        <v-card class="ma-2 pa-2">
                        <v-card-title class="text-h5 grey lighten-4">
                            <div class="d-flex justify-end">
                               john
                            </div>
                        </v-card-title>
                        <v-img src="../../assets/board.png" width="200" class="ma-2 pa-2"></v-img>
                         <div class="d-flex justify-start">
                        <v-card-text>
                          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </v-card-text>
                         </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            <v-icon >mdi-close</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                   </v-container>
                    </v-dialog>
          </v-row>
        </v-card>
     
        <v-card>
          <v-card-title class="bady white--text">
                <v-row cols="12" class="d-flex justify-center mb-1 ml-4 pt-2">
                  <div class="font-weight-medium">
                    <h5>Management</h5>
                  </div>
                </v-row>
          </v-card-title>
          <v-divider></v-divider>
        </v-card>
        
        <v-card class="supu white--text d-flex justify-space-between mb-6 pt-4"  flat tile>
          <v-row cols="12" class="d-flex justify-center mb-1 pt-2">
          
            <v-card v-for="n in members" :key="n" class="pa-1 ma-1" elevation="4" tile>
              
              <div class="text-center">
                <v-card @click.stop="dialog = true" width="230" v-bind="attrs" v-on="on" class="ma-4 pa-3">
                <v-img src="../../assets/board.png"></v-img>
                <v-card-text class="pt-1 mb-0">John Doe</v-card-text>
                <v-card-text >Department</v-card-text>
              </v-card>
              </div>
            </v-card>
             <v-dialog
                      v-model="dialog"
                      max-width="500"
                    >
                   <v-container fluid>
                        <v-card class="ma-2 pa-2">
                        <v-card-title class="text-h5 grey lighten-4">
                            <div class="d-flex justify-end">
                               john
                            </div>
                        </v-card-title>
                        <v-img src="../../assets/board.png" width="200" class="ma-2 pa-2"></v-img>
                         <div class="d-flex justify-start">
                        <v-card-text>
                          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                        </v-card-text>
                         </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="green darken-1"
                            text
                            @click="dialog = false"
                          >
                            <v-icon >mdi-close</v-icon>
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                   </v-container>
                    </v-dialog>
          </v-row>
        </v-card>
        <v-divider></v-divider>
      </v-container>
    </v-card>
  </v-container>
</template>
<script>
const baseURL="http://localhost:3000/api_v_1"
  export default {
    data () {
      return {

        members:[],
          dialog: false,
          items: [
        {
          text: 'About us',
          disabled: false,
          href: '/',
        },
        {
          text: 'Leadership',
          disabled: true,
          href: '/management',
        }
      ],
        
      }
    },
     created(){
      //fetch the data when the view is created and data is
      //already being observed
      this.fetchData()
      console.log(this.fetchData())
    },
    watch:{
      //call again the method if the route changes
      '$route':'fetchData'
    },
    methods:{
      formatResponse(res){
        return JSON.stringify(res,null,2)
      },
      async fetchData(){
        try{
          const res=await fetch(`${baseURL}/board`)
          if(!res.ok){
            const message=`An error has occured:${res.status}-${res.statusText}`
            throw new Error(message)
          }
          const data=await res.json()
          // const result={
          //   data:data,
          //   status:res.status,
          //   statusText:res.statusText,
          //   headers:{
          //     "Content-Type":res.headers.get("Content-Type"),
          //     "Content-Length":res.headers.get("Content-Length")
          //   },
          // }
          this.members=data
          console.log(data)
        }catch(err){
          this.members=err.message
        }
      },
      clearGetOutput(){
        this.members=null
      }
    }
  }
</script>