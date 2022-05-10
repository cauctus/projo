import { createRouter, createWebHistory } from 'vue-router';
import Index from '/src/pages/index.vue';
import Dashboard from '@/modules/dashboard/dashboard.vue';
import Controls from '@/modules/controls/controls.vue';
import Create from '@/modules/create/create.vue';
import Boards from '@/modules/boards/board.vue';
import NotFound from '/src/pages/404.vue';
import About from '/src/pages/about.vue';
import { layouts } from '@/layouts';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Index,
    },
    {
      path: '/controls',
      name: 'Controls',
      component: Controls,
      meta: {
        layout: layouts.navbar,
      },
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
      meta: {
        layout: layouts.navbar,
      },
    },
    {
      path: '/create',
      name: 'Create',
      component: Create,
      meta: {
        layout: layouts.navbar,
      },
    },
    {
      path: '/boards',
      name: 'Boards',
      component: Boards,
      meta: {
        layout: layouts.navbar,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFound,
      meta: {
        layout: layouts.navbar,
      },
    },
  ],
});
