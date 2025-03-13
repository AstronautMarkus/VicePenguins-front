<script setup>
import { useThemeProvider } from './composables/theme';
import { RouterView } from 'vue-router';
useThemeProvider();
</script>

<template>
  <RouterView />
</template>
