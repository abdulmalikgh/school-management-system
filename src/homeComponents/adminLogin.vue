<!--
<template>
    <v-app>
             <v-card width="400" class="mx-auto mt-5">
            <v-card-title class="m-3">
              <h1 class="display-1" centered>Admin Login</h1>
            </v-card-title><v-divider></v-divider>

            <v-card-text>
                <v-form @submit.prevent="login">
                    <v-text-field
                     label="Username" 
                     type="text"
                    prepend-icon="mdi-account-circle"
                    v-model="username"
                    required
                    :rules="userNameRules"
                    error-count="1"/>

                    <v-text-field label="password"
                     :type="showPassword ? 'text' : 'password'" 
                     prepend-icon="mdi-lock"
                     :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                     @click:append="showPassword = !showPassword"
                     v-model="password"
                     required
                     :rules="passwordRules"
                     error-count="2"/>
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="m-4">
                <v-spacer></v-spacer>
                <v-btn color="success m-5" >
                    Login
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
import loginForm from './loginForm'
export default {
   components:{
     loginForm
   },
   data() {
       return {
           username:'',
           password:'',
           showPassword: false,
           userNameRules: [v => !!v || 'Username is required'],
           passwordRules: [
               v => !!v || 'Password is required',
               v => (v && v.length >= 8) || "Password must have 8+ characters"
           ]
       }
   },
   methods(){
       login: {
         let username = this.username;
         let password = this.password;
         this.$store.dispatch('login', {username, password})
          .then(() => {
              this.$router.push('/admin')
          })
          .catch(err => {
              console.log('error');
          })
       }
   }
}
</script>

<style scoped>

</style>
-->
