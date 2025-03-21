<script setup>
import { useThemeConsumer } from '../../composables/theme';
import { useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSun, faMoon, faHouse } from '@fortawesome/free-solid-svg-icons';

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
        <font-awesome-icon :icon="faHouse" class="w-6 h-6 text-blue-500" />
      </span>
    </button>
    <button class="button is-dark icon-button" @click="toggleTheme">
      <span v-if="theme === 'light'" class="icon">
        <font-awesome-icon :icon="faMoon" class="w-6 h-6 text-gray-900" />
      </span>
      <span v-else class="icon">
        <font-awesome-icon :icon="faSun" class="w-6 h-6 text-yellow-500" />
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
