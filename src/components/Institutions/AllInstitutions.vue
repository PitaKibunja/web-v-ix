<template>

<v-container >
  <v-row cols="12 " class="d-flex justify-left mb-1 ml-4  pt-4">
     <div class="font-weight-medium">
                 <h2>TVET Institutions</h2>      
                    </div>
   </v-row>
  <v-divider></v-divider> 
 <template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        dense
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="Institutions"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
      

   
</v-container>

<!-- 
<v-container>

      
</v-container> -->

</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'SN',
            align: 'start',
            sortable: false,
            value: '1',
          },
          { text: 'Institution Name', value: 'name' },
          { text: 'TVETA Reg. No', value: 'regno' },
          { text: 'County', value: 'county' },
          { text: 'Reg.Date', value: 'regdate' },
          { text: 'Expiry Date', value: 'expdate' },
          { text: 'Category', value: 'category' },
          { text: 'Type', value: 'type' },
          { link: 'Details', value: 'details' },
        ],
        Institutions: [
          {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },{
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },
             {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },   {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },   {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },   {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },   {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },   {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },   {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },   {
            name: 'Kaimbaga Institute',
            regno:'TVETA/PRIVATE/TVC/0045',
            county:'Kiambu',
            regdate:'22-09-2021',
            expdate:'22-09-2026',
            category:'TVC',
            type:'PRIVATE',
            details:'Details'
          },

        ],
      }
    },
  }
</script>