import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      component: () => import('pages/IndexPage.vue'),
    }],

  },
  {
    path: '/callback',
    component: () => import('pages/CallbackPage.vue'),
  },
  // {
  //   path: '/login',
  //   component: () => import('layouts/LoginLayout.vue'),
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
