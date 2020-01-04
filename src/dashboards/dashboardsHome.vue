<template>
  <v-app>
    <navHeader />
    <v-content class="md-4">
     <router-view> 
     </router-view>
     </v-content>
  </v-app>
</template>

<script>
import navHeader from './navHeader';
export default {
  name: 'dashboardsHome',

  components: {
   navHeader,

  },

  data: () => ({
    //
  }),
};
</script>
