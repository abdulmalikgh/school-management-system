import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Axios from 'axios';



Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  Axios, 
  render: h => h(App)
}).$mount('#app')

const token = localStorage.getItem('token');
if(token) {
  Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}