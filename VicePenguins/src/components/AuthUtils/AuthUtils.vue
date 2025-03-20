<script setup>
import { useThemeConsumer } from '../../composables/theme';
import { SunIcon, MoonIcon, HomeIcon } from '@heroicons/vue/24/outline';
import { useRouter } from 'vue-router';

const { theme, toggleTheme } = useThemeConsumer();
const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="auth-theme-toggle">
    <button class="button is-dark icon-button" @click="goHome">
      <span class="icon">
        <HomeIcon class="w-6 h-6 text-blue-500" />
      </span>
    </button>
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
  display: flex;
  gap: 1rem;
}

.auth-theme-toggle button:first-child {
  position: fixed;
  left: 1rem;
}
</style>
