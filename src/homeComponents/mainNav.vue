<template>
  <v-app-bar app color="success" dark>
    <v-toolbar-title> Saint James SHS </v-toolbar-title>
     <v-spacer></v-spacer>
     <v-btn text rounded>
       <router-link to="/">Home</router-link>
     </v-btn>
     <v-btn text rounded>
       <router-link to="/about">About</router-link>
     </v-btn>
     <v-btn text rounded>
       <router-link to="/adminlogin">Admin Login</router-link>
     </v-btn>
  </v-app-bar>
</template>
<script>
export default {
    name:'mainNav',

}
</script>
<style scoped>
 a{
   text-decoration: none;
 }
</style>