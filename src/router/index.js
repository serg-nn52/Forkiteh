import { createWebHistory, createRouter } from 'vue-router';
import Page404 from '../view/Page404.vue';
import PageApp from '../view/PageApp.vue';
import MainPage from '../view/MainPage.vue';
import { menuPaths } from './paths';

const baseURL = '/forkiteh/';

const routes = [
  {
    path: baseURL,
    component: MainPage,
    name: 'Main',
  },
  {
    path: menuPaths[0].path,
    component: PageApp,
    name: menuPaths[0].name,
  },
  {
    path: menuPaths[1].path,
    component: PageApp,
    name: menuPaths[1].name,
  },
  {
    path: menuPaths[2].path,
    component: PageApp,
    name: menuPaths[2].name,
  },
  {
    path: menuPaths[3].path,
    component: PageApp,
    name: menuPaths[3].name,
  },
  {
    path: menuPaths[4].path,
    component: PageApp,
    name: menuPaths[4].name,
  },
  {
    path: menuPaths[5].path,
    component: PageApp,
    name: menuPaths[5].name,
  },
  {
    path: '/:pathMatch(.*)*',
    component: Page404,
    name: 'NotFound',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
