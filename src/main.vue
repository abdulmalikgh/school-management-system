<template>
  <v-app>
      <mainNav />
      <v-content>
          <router-view />
      </v-content>
  </v-app>
</template>

<script>
import mainNav from './homeComponents/mainNav.vue';
export default {
    components:{
        mainNav
    }
}
</script>

<style scoped>

</style>