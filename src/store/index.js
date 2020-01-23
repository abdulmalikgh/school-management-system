import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    status:'',
    accessStatus:'',
    token: localStorage.getItem('token') || '',
    adminData:{},
    studentList:{},
    studentData:{},
    teachersList:{},
  },

  mutations: {
    auth_request(state){
      state.status = 'loading';
    },
    auth_success(state, token, adminData) {
      state.status = 'success';
      state.token = token;
      state.adminData = adminData;
    },
    auth_error(state){
       state.status = 'error';
  },
  access_success(state){
    state.accessStatus ="success";
  },
  access_error(state){
    state.accessStatus = "Error"
  },
  logout(state) {
    state.status = '';
    state.token = '';
  }
  },
  actions: {
    login({commit}, adminData){
      return new Promise((resolve,reject)=>{
        commit('auth_request')
        axios({
          url:'https://school-management-system123.herokuapp.com/oauth/token',
          data: adminData, 
          method:'POST'
        }).then( resp => {
          const token = resp.data.access_token;
          const adminData = resp.data.admin;
          localStorage.setItem('token', token);
          axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success',{ token, adminData});
          resolve(resp)
        }).catch(err => {
          commit('auth_error')
          localStorage.removeItem('token');
          reject(err)
        })
    })
    },
    registerStudent({commit}, studentData){
      return new Promise((resolve,reject) =>{
        axios({
          url:'https://school-management-system123.herokuapp.com/student/register',
          data:studentData,
          method:'POST',
        }).then( resp => {
          commit('access_success');
           console.log(resp);
           resolve(res)
        }).catch(err => {
          commit('access_error')
          console.log("An Error occurs:", err)
          reject(err.status)
        })
      })
    },
    registerTeacher({commit},teacherData){
     return new Promise( (resolve, reject) => {
       console.log(teacherData)
       axios({
           url:'https://school-management-system123.herokuapp.com/teacher/register',
           mthod:'POST',
           data:teacherData,
         }).then(res => {
       console.log(res)
       resolve(res)
     }).catch(err => {
       console.log(err)
       reject(err)
     })

    });
    },
    viewStudentList({commit}) {
      return new Promise((resolve, reject)=>{
       axios.get({
         url:'https://school-management-system123.herokuapp.com/students',
         method:'GET'
       }).then(res => {
         console.log(res)
         resolve(res)
       }).then(err => {
         resolve(err)
       })
      });
    },
    logout({commit}) {
      return new Promise((resolve,reject) => {
        commit('logout');
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve();
      })
    },
  },

  getters: {
   isLoggedIn: state => !!state.token,
   authStatus: state => state.status,
   accStatus: state => state.accessStatus,
  },

  modules: {
  }
})
