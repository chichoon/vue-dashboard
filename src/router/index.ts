import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/UserView.vue')
    }
  ]
});

export default router;
