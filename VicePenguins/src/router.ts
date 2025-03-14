import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import SearchResult from './pages/SearchResult.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Inicio' } },
  { path: '/about', component: About, meta: { title: 'Sobre' } },
  { path: '/search/:query', component: SearchResult, meta: { title: 'Resultados de la búsqueda' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || 'Title';
  next();
});

export default router;