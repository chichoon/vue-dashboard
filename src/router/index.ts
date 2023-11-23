import { createRouter, createWebHashHistory } from 'vue-router';
import DashboardView from '@/views/DashboardView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('@/views/TableView.vue')
    },
    {
      path: '/typography',
      name: 'Typography',
      component: () => import('@/views/TypographyView.vue')
    },
    {
      path: '/icons',
      name: 'Icons',
      component: () => import('@/views/IconsView.vue')
    },
    {
      path: '/maps',
      name: 'Maps',
      component: () => import('@/views/MapsView.vue')
    },
    {
      path: '/notifications',
      name: 'Notifications',
      component: () => import('@/views/NotificationsView.vue')
    },
    {
      path: '/upgrade',
      name: 'Upgrade',
      component: () => import('@/views/UpgradeView.vue')
    }
  ]
});

export default router;
