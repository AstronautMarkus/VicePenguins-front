import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import SearchResult from './pages/SearchResult.vue';
import Mods from './pages/Mods.vue';

import Login from './pages/Auth/Login/Login.vue';
import SignIn from './pages/Auth/SignIn/SignIn.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Inicio' } },
  { path: '/about', component: About, meta: { title: 'Sobre' } },
  { path: '/search/:query', component: SearchResult, meta: { title: 'Resultados de la búsqueda' } },
  { path: '/mods', component: Mods, meta: { title: 'Mods' } },
  { path: '/auth', children: [
    { path: 'login', component: Login, meta: { title: 'Iniciar sesión' } },
    { path: 'register', component: SignIn, meta: { title: 'Registrarse' } },
  ] },
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