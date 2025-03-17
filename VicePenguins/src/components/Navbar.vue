<script setup>
import { ref } from 'vue';
import { useThemeConsumer } from '../composables/theme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
const { theme, toggleTheme } = useThemeConsumer();
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
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
        <a class="navbar-item" href="/">Mods</a>
        <a class="navbar-item" href="/">Skins</a>
        <a class="navbar-item" href="/">Tutoriales</a>
        <a class="navbar-item" href="/">Artículos</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-success"><strong>Registrarse</strong></a>
            <a class="button is-info">Iniciar Sesión</a>
          </div>
        </div>

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
  </nav>
</template>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}
</style>

