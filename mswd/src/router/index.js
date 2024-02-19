import { createRouter, createWebHistory } from 'vue-router'
import navbar from '../views/navbar.vue'
import Admin from '../views/Admin.vue'


import Template from '../views/Template.vue'

import Dashboard from '../views/Dashboard.vue'
const routes = [

  {
    path: '/navbar',
    name: 'home',
    component: navbar
  }
  ,

  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
  ,
  {
    path:'/',
    name: 'Admin',
    component: Admin
  }

  ,
  {
    path:'/Template',
    name: 'Template',
    component: Template
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
