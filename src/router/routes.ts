import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'agents',
        component: () => import('pages/agents/AgentsPage.vue'),
      },
      {
        path: 'events',
        component: () => import('pages/events/RecentEventsPage.vue'),
      },
      {
        path: 'queues',
        component: () => import('pages/queues/QueuesPage.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
