import Vue from 'vue';
import VueRouter from 'vue-router';
import adminDashboard from '../dashboards/admin/dashboard';
import students from '../dashboards/admin/students';
import teachers from '../dashboards/admin/teachers';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: adminDashboard
  },
  {
    path: '/students',
    name: 'students',
    component: students,
  },
  {
    path:'/teachers',
    name: 'teachers',
    component:teachers,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
