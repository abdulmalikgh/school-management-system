import Vue from 'vue';
import VueRouter from 'vue-router';
import adminDashboard from '../dashboards/admin/dashboard';
import students from '../dashboards/admin/students';
import teachers from '../dashboards/admin/teachers';
import home from '../homeComponents/Home';
import about from '../homeComponents/About';
import main from '../main.vue';
import dashboardsHome from '../dashboards/dashboardsHome';
import AdminLogin from '../homeComponents/adminLogin';
Vue.use(VueRouter)

const routes = [
   {
     path:'/',
     redirect:'/home',
     name: 'main',
     component:main,
      children:[
        {
         path:'/home',
         name:'home',
         component:home
        },
        {
          path:'/adminLogin',
          name:'adminLogin',
          component:AdminLogin
        }
        ,
        {
          path:'/about',
          name:'about',
          component:about
        }
      ]

   },
  {
    path: '/admin',
    name: 'dashboardsHome',
    redirect:'/dashboard',
    meta:{requirdAuth: true},
    component: dashboardsHome,
    children: [
      {
        path: '/dashboard',
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
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
