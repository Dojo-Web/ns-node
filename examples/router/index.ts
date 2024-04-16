import { createRouter, createWebHashHistory,createWebHistory, RouteRecordRaw } from 'vue-router'
import Button from '../views/Button.vue'
import Layout from '../components/Layout.vue'
const routes: Array<any> = [
  
  {
    path: '/',
    redirect: '/component/button',
  },
  {
    path: '/component',
    name: 'component',
    component: Layout,
    children: [
      {
        path: 'button',
        name: 'button',
        component: Button
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
