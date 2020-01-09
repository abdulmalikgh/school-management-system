import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    status:'',
    token: localStorage.getItem('token') || '',
    adminData:{}
  },
  mutations: {
  },
  actions: {
    login({commit}, adminData){
      return new Promise((resolve,reject)=>{
        commit('auth_request')

        axios({
          ulr:'school-management-system123.herokuapp.com/oauth/token',
          data: adminData, method:'POST'
        }).then( resp => {
          const token = resp.data.token;
          const adminData = resp.data.admin;
          localStorage.setItem('token', token);
          axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', token, adminData);
          resolve(resp)
        }).catch(err => {
          commit('auth_error')
          localStorage.removeItem('token');
          reject(err)
        })
    })
    },
    logout({commit}) {
      return new Promise((resolve,reject) => {
        commit('logout');
        localStorage.removeItem('token')
        delete axios.defaults.headers.common[Authorization]
        resolve();
      })
    }
  },
  modules: {
  }
})
