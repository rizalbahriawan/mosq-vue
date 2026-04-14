import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import DefaultLayout from '@/views/layout/DefaultLayout.vue'
import Announcements from '@/views/announcements/List.vue'
import AnnouncementDetail from '@/views/announcements/Detail.vue'
import Informations from '@/views/informations/List.vue'
import InformationDetail from '@/views/informations/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/announcements',
          name: 'Announcements',
          component: Announcements,
        },
        {
          path: 'announcements/:slug',
          name: 'AnnouncementDetail',
          component: AnnouncementDetail,
        },
        {
          path: '/informations',
          name: 'Informations',
          component: Informations,
        },
        {
          path: 'informations/:slug',
          name: 'InformationDetail',
          component: InformationDetail,
        },
      ],
    },

    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
  ],
})

export default router
