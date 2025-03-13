<script setup>
import { useThemeConsumer } from '../composables/theme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

const { theme, toggleTheme } = useThemeConsumer();
</script>

<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">Inicio</RouterLink>
      <RouterLink class="navbar-item" to="/about">Acerca de</RouterLink>
    </div>
    <div class="navbar-end">
      <button class="button is-light icon-button" @click="toggleTheme">
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
.navbar {
  padding: 0.5rem;
}

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
</style>
