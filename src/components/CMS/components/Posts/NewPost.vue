<template>
<v-container>
                            <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    @submit.prevent="createPost"
                                    
                                >
                                 <v-card height="700px">
    <v-card-title>
             <v-row cols="12 " class="d-flex justify mb-1 ml-4  pt-2">             
          <v-col class="d-flex">
            <v-text-field
            :counter="25"
            v-model="newPostData.title"
            :rules="nameRules"
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
          v-model="newPostData.category"
          label="Select the category"
        ></v-select>
      </v-col>
            </v-row>
    </v-card-title>
    <ckeditor :editor="editor" v-model="newPostData.editorData" :config="editorConfig"></ckeditor>
    <v-btn
                                    
    color="#508F40"
    class="mr-4"
    dark
    type="submit"
     >
      Submit
     </v-btn>
  </v-card>                          
    </v-form>
 
</v-container>
</template>

<script>
const baseURL="http://localhost:3000/api_v_1"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {        
        data() {
            return {
                categories:[],
                error:[],
                newPostData:{
                  title:null,
                  category:null,
                  editorData:null
                },
                nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 30) || 'Title must be less than 30 characters',
      ],
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
       }catch(err){
         this.error=err
       }
     },
     async createPost(){
       try{
         console.warn(this.newPostData)
          this.$http.post(`${baseURL}/Admin/posts/post`,this.newPostData)
        .then((result)=>{
          console.warn(result)
        })
       }catch(err){
         this.error=err
       }
     }
   }

    }
</script>
