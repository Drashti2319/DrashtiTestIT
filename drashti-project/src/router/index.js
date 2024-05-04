import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Users',
      name: 'Users',
      component: () => import('../pages/Users/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue')
    }
  ]
})

export default router
