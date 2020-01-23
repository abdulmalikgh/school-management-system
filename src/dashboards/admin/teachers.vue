<template>
   <v-container>
      <v-row no-gutters>
         <v-col cols="6" :sm="12" :lg="8" :md="8">
            <v-btn color="success" @click="toggleRegistration">Register Teacher</v-btn>
          </v-col>
         
      </v-row>
      <v-row>
      <v-col>
       <v-card  class="mx-auto mt-5 px-5 pb-4  py-5" v-if="register">
       <v-card-title>
            <h1 class="display-2"> Teacher Registration Form</h1>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-form ref="form" 
            v-model="valid"
            lazy-validation="">
                <v-text-field type="text"
                 label="First Name"
                 :rules=" [v => !!v || 'First name is required']" required
                 v-model="first_name"/>
                <v-text-field type="text"
                 label="Middle Name" v-model="middle_name"/>
                <v-text-field type="text" 
                 label="Last Name" 
                 :rules=" [v => !!v || 'Last name is required']" required 
                 v-model="last_name"/>
                <v-text-field type="text"
                 label="Subject" 
                 :rules=" [v => !!v || 'subject is required']"
                  required v-model="subject"
                  />
               <v-text-field type="text"
                 label="qualification" 
                 :rules=" [v => !!v || 'qualification is required']"
                  required v-model="qualification"
                  />
            </v-form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" right @click="registerTeacher" :disabled="!valid"> Register Teacher</v-btn>
            </v-card-actions>
        </v-card-text>
       </v-card>
     </v-col>
     </v-row>
    </v-container>
</template>

<script>
export default {
    name:'teachers',

    data(){
     return{ 
         register:false,
         valid:true,
         
         first_name:'',
         middle_name:'',
         last_name:'',
         qualification:'',
         subject:'',
     }
    }
    ,
    methods: {
        toggleRegistration: function(){
            this.register = !this.register;
        },
        registerTeacher: function(e) {
                   e.preventDefault();
            if(this.$refs.form.validate()) {
                data = {
                   first_name:this.first_name,
                   middle_name:this.middle_name,
                   last_name:this.last_name,
                   subject:this.subject,
                  qualification:this.qualification
                };
            };
        },
    }
}
</script>

<style scoped>
</style>>