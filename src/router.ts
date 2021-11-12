import { createRouter, createWebHistory } from 'vue-router';
import Index from '/src/pages/index.vue';
import Controls from '/src/pages/controls.vue';
import Dashboard from '/src/pages/dashboard.vue';
import NotFound from '/src/pages/404.vue';

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
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
