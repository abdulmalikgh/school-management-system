<template>
  <v-app>
   
   <dashboardFooter/>
  </v-app>
</template>

<script>
import navHeader from './navHeader';
import dashboardFooter from './dashboardFooter'
export default {
  name: 'dashboardsHome',

  components: {
   navHeader,
   dashboardFooter

  },

  data: () => ({
    //
  }),
};
</script>
