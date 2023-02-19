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
      <div class="mt-1">
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
          <div class="leaders-container mt-1">
    <div class="search-container">
      <v-text-field
        v-model="search"
        label="Search leaders"
        dense
        outlined
        prepend-inner-icon="mdi-magnify"
        class="search-bar"
      ></v-text-field>
    </div>
    <v-row
      align="center"
      justify="center"
      class="leaders-grid"
    >
      <v-col
        v-for="(leader, index) in filteredLeaders"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          @click="showDialog(index)"
          class="leader-card"
        >
          <v-img
            :src="leader.img"
            height="300"
          ></v-img>
          <v-card-title class="leader-name">
            {{ leader.name }}
          </v-card-title>
          <v-card-subtitle class="leader-title">
            {{ leader.position }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <v-card>
        <v-card-title>
          {{ selectedLeader.name }}
        </v-card-title>
        <v-card-text>
          {{ selectedLeader.details }}
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        </v-card>
        <!-- <Managers/> -->
        <!-- <v-card class="supu white--text d-flex justify-space-between mb-1 pt-4"  flat tile>
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
        </v-card> -->
      </v-container>
    </v-card>
  </v-container>
</template>
<!-- <script>
import Managers from './manage.vue'

const baseURL="https://tveta-web-backend.onrender.com/api_v_1"
export default {
  components: {
      Managers
    },
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
      async fetchData(){
        try{
          const res=await fetch(`${baseURL}/board`)
          if(!res.ok){
            const message=`An error has occured:${res.status}-${res.statusText}`
            throw new Error(message)
          }
          const data=await res.json()
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
</script> -->
<script>
const baseURL="https://tveta-web-backend.onrender.com/api_v_1"
export default {
  data() {
    return {
      search: '',
      dialog: false,
      selectedLeader: {},
      leaders: []
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route':'fetchData'
  },
  computed: {
    filteredLeaders() {
      return this.leaders.filter(leader => {
        return leader.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    async fetchData() {
      try {
        const res = await fetch(`${baseURL}/board`)
        if (!res.ok) {
          const message = `an error has occured: ${res.status}-${res.statusText}`
          throw new Error(message)
        }
        const data = await res.json()
        this.leaders=data
      } catch (error) {
        this.members=error.message
      }
    },
    showDialog(index) {
      this.selectedLeader = this.filteredLeaders[index];
      this.dialog = true;
    }
  }
}
</script>
