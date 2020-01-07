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
import dashboardsHome from './dashboards/dashboardsHome';
import navHeader from './dashboards/navHeader';
import dashboardFooter from './dashboards/dashboardFooter'
 
export default {
  name: 'App',

  components: {
   navHeader,
   dashboardFooter 
  },

  data: () => ({
    //
  }),
};
</script>
