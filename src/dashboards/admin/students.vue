<template>
   <v-container>
      <v-row no-gutters>
         <v-col cols="6" :sm="12" :lg="6" :md="6">
            <v-btn color="success" @click="toggleRegistration">Register Student</v-btn>
          </v-col>
          <v-col cols="6" :sm="12" :lg="6" :md="6">
            <v-btn color="primary" @click="viewList = !viewList">view student list</v-btn>
          </v-col>
      </v-row>
      <v-row>
      <v-col>
       <v-card  class="mx-auto mt-5 px-5 pb-4  py-5" v-if="register">
       <v-card-title>
            <h1 class="display-2"> student Registration Form</h1>
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
                <v-text-field type="date"
                 label="Date of Birth" 
                 :rules=" [v => !!v || 'Date of Birth is required']"
                  required v-model="date_of_birth"/>
                <v-text-field type="text"
                 label="Program" 
                 :rules=" [v => !!v || 'Program is required']" 
                 required v-model="program"/>
                  <v-text-field type="text"
                 label="Status" 
                 :rules=" [v => !!v || 'status is required']" 
                 required v-model="status"/>
                  <v-text-field type="date"
                 label="Year Started" 
                 :rules=" [v => !!v || 'starting Date is required']" 
                 required v-model="year_started"/>
                  <v-text-field type="text"
                 label="Form" 
                 :rules=" [v => !!v || 'form required']" required
                  v-model="form"/>
            </v-form>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success" right @click="registerStudent" :disabled="!valid"> Register student</v-btn>
            </v-card-actions>
        </v-card-text>
       </v-card>
       <!-- end of register component-->
       <!-- start of view user list component -->
       <v-card v-if="viewList">
           <v-card-title>
               <h2>Registered students</h2>
           </v-card-title>
           <v-card-text>
               <v-list>
                   <v-list-item ></v-list-item>
               </v-list>
           </v-card-text>
       </v-card>
     </v-col>
     </v-row>
    </v-container>
</template>

<script>
export default {
    name:'students',

    data(){
     return{ 
         register:false,
         viewList: false,
         valid:true,
         
         first_name:'',
         middle_name:'',
         last_name:'',
         program:'',
         form:'',
         status:'',
         year_started:'',
         date_of_birth:'',
     }
    }
    ,
    methods: {
        toggleRegistration: function(){
            this.register = !this.register;
        },
        registerStudent: function(e) {
                   e.preventDefault();
            if(this.$refs.form.validate()) {
               const studentData = {
                   first_name:this.first_name,
                   middle_name:this.middle_name,
                   last_name:this.last_name,
                   program:this.program,
                   form:this.form,
                   status:this.program,
                   year_started:this.year_started,
                   date_of_birth:this.date_of_birth

                };
                this.$store.dispatch('registerStudent',studentData)
            };
        },
    }
}
</script>

<style scoped>
</style>>