<template>
<v-container>
  <v-card height="700px">
    <v-card-title>
             <v-row cols="12 " class="d-flex justify mb-1 ml-4  pt-2">             
          <v-col class="d-flex">
            <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Add title"
            placeholder="John Doe"
            required
          ></v-text-field>
          </v-col>
             <v-col
        class="d-flex"
        cols="4"
        sm="6"
      >
        <v-select
          :items="categories"
          label="Select the category"
        ></v-select>
      </v-col>
            </v-row>
    </v-card-title>
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" ></ckeditor>
  </v-card>
</v-container>
</template>

<script>
const baseURL="http://localhost:3000/api_v_1"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {        
        data() {
            return {
                categories:[],
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            };
        },
        beforeCreate(){
         this.fetchCategories()
      },
      created(){
      this.fetchCategories()  
   },
   methods:{
     async fetchCategories(){
       try{
         const res=await fetch(`${baseURL}/Admin/posts/category`)
         if(!res.ok){
           const message=`An error has occured:${res.status}-${res.statusText}`
           throw new Error(message)
         }
         const data=await res.json()
         this.categories=data
         console.log(this.categories)
       }catch(error){
         this.categories
       }
     }
   }

    }
</script>
