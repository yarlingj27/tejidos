import { createRouter, createWebHistory } from 'vue-router'
import PrincipalView from '../views/PrincipalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'principal',
      component: PrincipalView
    },
    {
      path: '/tejidos',
      name: 'tejidos',
      component: () => import('@/views/TejidosView.vue') 
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactoView.vue') 
    }
    
  ]
})

export default router
