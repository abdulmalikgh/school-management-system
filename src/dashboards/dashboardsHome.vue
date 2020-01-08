<template>
  <v-app>
   <navHeader />
    <v-content class="md-4">
      <router-view />
    </v-content>
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
