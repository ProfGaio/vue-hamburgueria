import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidosView from '@/views/PedidosView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistroView from '@/views/RegistroView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
    path: '/login',
    name: 'login',
    component: LoginView
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: RegistroView
      },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: PedidosView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
