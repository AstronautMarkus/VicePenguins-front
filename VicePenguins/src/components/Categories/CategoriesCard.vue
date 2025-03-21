<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

defineProps<{
  title: string;
  icon: any;
  url: string;
}>();
</script>

<template>
  <a :href="url" class="box has-text-centered">
    <font-awesome-icon :icon="icon" class="icon is-large" />
    <p>{{ title }}</p>
  </a>
</template>

<style scoped>
.icon {
  width: 2rem;
  height: 2rem;
}
</style>
