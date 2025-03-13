<script setup lang="ts">
defineProps<{
  title: string;
  icon: any;
  url: string;
}>();
</script>

<template>
  <a :href="url" class="box has-text-centered">
    <component :is="icon" class="icon is-large" />
    <p>{{ title }}</p>
  </a>
</template>

<style scoped>
.icon {
  width: 2rem;
  height: 2rem;
}
</style>
