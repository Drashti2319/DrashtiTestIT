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
    },
    {
      path: '/DataCommunication',
      name: 'dataCommunication',
      children: [
        {
          path: '',
          name: 'dataCommunicationIndex',
          component: () => import('../pages/DataCommunication/index.vue')
        },
        {
          path: '/ParentChild',
          name: 'parentChild',
          component: () => import('../pages/DataCommunication/ParentChild/index.vue')
        },
        {
          path: '/ChildParent',
          name: 'childParent',
          component: () => import('../pages/DataCommunication/ChildParent/index.vue')
        },
        {
          path: '/ChildChild',
          name: 'childChild',
          component: () => import('../pages/DataCommunication/ChildChild/index.vue')
        }
      ]
    },
    {
      path: '/DynamicHandlingForm',
      name: 'dynamicHandlingForm',
      component: () => import('../pages/DynamicHandlingForm/index.vue')
    }
  ]
})

export default router
