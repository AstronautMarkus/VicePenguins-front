<script setup>
import { useThemeConsumer } from '../composables/theme';

const { theme, toggleTheme } = useThemeConsumer();
</script>

<template>
  <nav class="navbar is-primary">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">Inicio</RouterLink>
      <RouterLink class="navbar-item" to="/about">Acerca de</RouterLink>
    </div>

    <div class="navbar-end">
      <button class="button is-light" @click="toggleTheme">
        Tema: {{ theme === 'light' ? '🌞 Claro' : '🌙 Oscuro' }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 1rem;
}
</style>
