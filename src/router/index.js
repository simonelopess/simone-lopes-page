import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/education',
      name: 'education',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EducationView.vue'),
    },
    {
      path: '/experience',
      name: 'experience',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ExperienceView.vue'),
    },
  ],
})

export default router
