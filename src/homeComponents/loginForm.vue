<template>
       <v-card width="400" class="mx-auto mt-5">
            <v-card-title class="m-3">
              <h1 class="display-1" centered>Admin Login</h1>
            </v-card-title><v-divider></v-divider>

            <v-card-text>
                <v-form>
                    <v-text-field label="Username" 
                    prepend-icon="mdi-account-circle"
                    v-model="username"
                    required/>

                    <v-text-field label="password"
                     :type="showPassword ? 'text' : 'password'" 
                     prepend-icon="mdi-lock"
                     :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                     @click:append="showPassword = !showPassword"
                     v-model="password"
                     required/>
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
</template>
<script>

export default {
    data() {
        return{
        showPassword : false
        }
    },
}
</script>

<style scoped>

</style>