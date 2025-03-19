<script setup>
import { useThemeConsumer } from '../../composables/theme';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';

const { theme, toggleTheme } = useThemeConsumer();
</script>

<template>
  <div class="auth-theme-toggle">
    <button class="button is-dark icon-button" @click="toggleTheme">
      <span v-if="theme === 'light'" class="icon">
        <MoonIcon class="w-6 h-6 text-gray-900" />
      </span>
      <span v-else class="icon">
        <SunIcon class="w-6 h-6 text-yellow-500" />
      </span>
    </button>
  </div>
</template>

<style scoped>
.auth-theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
}
</style>
