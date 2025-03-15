<script setup lang="ts">
import { useThemeProvider } from './composables/theme';
import { RouterView } from 'vue-router';
useThemeProvider();
</script>

<template>
  <RouterView />
</template>
