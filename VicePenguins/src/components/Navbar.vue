<script setup>
import { useThemeConsumer } from '../composables/theme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
const { theme, toggleTheme } = useThemeConsumer();
</script>

<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img src="/public/img/logo/vicepenguins_logo.png" alt="vicepenguins" class="logo">
      </RouterLink>
      <RouterLink class="navbar-item" to="/">Mods</RouterLink>
      <RouterLink class="navbar-item" to="/">Skins</RouterLink>
      <RouterLink class="navbar-item" to="/">Texture Packs</RouterLink>     
    </div>
    <div class="navbar-end">
      <RouterLink class="navbar-item" to="/">Iniciar sesión</RouterLink>
      <RouterLink class="navbar-item" to="/">Registrarse</RouterLink>
      <button class="button is-dark icon-button" @click="toggleTheme">
        <span v-if="theme === 'light'" class="icon">
          <MoonIcon class="w-6 h-6 text-gray-900" />
        </span>
        <span v-else class="icon">
          <SunIcon class="w-6 h-6 text-yellow-500" />
        </span>
      </button>
    </div>
  </nav>
</template>

<style scoped>

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  margin: 0 1.5rem;
}

.logo {
  height: auto;
  margin-right: 0.5rem;
}
</style>
