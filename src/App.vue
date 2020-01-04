<template>
  <main>
    <dashboardsHome />
  </main>
</template>
<script>
import dashboardsHome from './dashboards/dashboardsHome';

export default {
  name: 'App',

  components: {
   dashboardsHome,
  },

  data: () => ({
    //
  }),
};
</script>
