<script setup>
import { ref, onMounted } from 'vue';
import { useThemeConsumer } from '../../composables/theme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
import jwtDecode from 'jwt-decode';

const { theme, toggleTheme } = useThemeConsumer();
const isMenuOpen = ref(false);
const username = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      username.value = decoded.username;
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      localStorage.removeItem('token'); 
    }
  }
});

const logout = () => {
  localStorage.removeItem('token');
  username.value = null;
  window.location.href = '/login';
};
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="/img/logo/vicepenguins_logo.png" 
             alt="Foro Mods" width="150px" height="auto">
      </a>
      <a role="button" class="navbar-burger" :class="{ 'is-active': isMenuOpen }" 
         aria-label="menu" aria-expanded="false" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
      <div class="navbar-start">
        <a class="navbar-item" href="/mods">Mods</a>
        <a class="navbar-item" href="/skins">Skins</a>
        <a class="navbar-item" href="/">Tutoriales</a>
        <a class="navbar-item" href="/">Artículos</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="username">
              <span class="navbar-item">{{ username }}</span>
              <button class="button is-danger" @click="logout">Cerrar Sesión</button>
            </template>

            <template v-else>
              <a href="/register" class="button is-success"><strong>Registrarse</strong></a>
              <a href="/login" class="button is-info">Iniciar Sesión</a>
            </template>

            <button class="button is-dark icon-button" @click="toggleTheme">
              <span v-if="theme === 'light'" class="icon">
                <MoonIcon class="w-6 h-6 text-gray-900" />
              </span>
              <span v-else class="icon">
                <SunIcon class="w-6 h-6 text-yellow-500" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}
</style>
