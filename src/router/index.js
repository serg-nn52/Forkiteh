import { createWebHistory, createRouter } from 'vue-router';
import Page404 from '../view/Page404.vue';
import MainPage from '../view/MainPage.vue';
import PageAdvantage from '../view/PageAdvantage.vue';
import PageRates from '../view/PageRates.vue';
import PageSales from '../view/PageSales.vue';
import PagePromo from '../view/PagePromo.vue';
import PageEsim from '../view/PageEsim.vue';
import PageNewclient from '../view/PageNewclient.vue';
import { menuPaths } from './paths';

const baseURL = '/Forkiteh/';

const routes = [
  {
    path: baseURL,
    component: MainPage,
    name: 'Main',
  },
  {
    path: menuPaths[0].path,
    component: PageAdvantage,
    name: menuPaths[0].name,
  },
  {
    path: menuPaths[1].path,
    component: PageRates,
    name: menuPaths[1].name,
  },
  {
    path: menuPaths[2].path,
    component: PageSales,
    name: menuPaths[2].name,
  },
  {
    path: menuPaths[3].path,
    component: PagePromo,
    name: menuPaths[3].name,
  },
  {
    path: menuPaths[4].path,
    component: PageEsim,
    name: menuPaths[4].name,
  },
  {
    path: menuPaths[5].path,
    component: PageNewclient,
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
