<template>
  <v-app-bar app color="success" dark>
    <v-toolbar-title > Saint James SHS </v-toolbar-title>
     <v-spacer></v-spacer>
     <v-btn text rounded to="/">
       Home
     </v-btn>
     <v-btn text rounded to="/about">
       About
     </v-btn>
     <v-btn text rounded to="adminlogin">
       Admin Login
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