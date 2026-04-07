import { createRouter, createWebHistory } from 'vue-router'

import Announcements from '@/views/Announcements.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/announcements',
      name: 'Announcements',
      component: Announcements,
    },
  ],
})

export default router
