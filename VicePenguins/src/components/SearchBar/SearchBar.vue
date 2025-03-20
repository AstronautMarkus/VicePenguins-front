<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const query = ref('');
const router = useRouter();

onMounted(() => {
  const savedQuery = sessionStorage.getItem('searchQuery');
  if (savedQuery) {
    query.value = savedQuery;
  }
});

watch(query, (newQuery) => {
  sessionStorage.setItem('searchQuery', newQuery.trim());
});

const search = () => {
  if (query.value.trim()) {
    const encodedQuery = encodeURIComponent(query.value.trim());
    sessionStorage.setItem('searchQuery', query.value.trim());
    router.push(`/search/${encodedQuery}`);
  }
};
</script>

<template>
        <div class="container has-text-centered mt-4 mb-5">
          <div class="field has-addons has-addons-centered">
            <div class="control is-expanded" style="max-width: 100vh;">
              <input class="input is-medium" type="text" placeholder="Buscar mods..." v-model="query" @keyup.enter="search">
            </div>
            <div class="control">
              <button class="button is-info is-medium" @click="search">
                <span class="icon">
                  <MagnifyingGlassIcon class="w-6 h-6" />
                </span>
              </button>
            </div>
          </div>
        </div>
</template>