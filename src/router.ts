import { createRouter, createWebHistory } from 'vue-router';
import Index from '/src/pages/index.vue';
import Dashboard from '@/modules/dashboard/dashboard.vue';
import Controls from '@/modules/controls/controls.vue';
import Create from '@/modules/create/create.vue';
import NotFound from '/src/pages/404.vue';
import About from '/src/pages/about.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
  },
  {
    path: '/controls',
    name: 'Controls',
    component: Controls,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
