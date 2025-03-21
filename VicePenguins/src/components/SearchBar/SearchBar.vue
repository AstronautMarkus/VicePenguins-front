<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
            <font-awesome-icon :icon="faMagnifyingGlass" class="w-6 h-6" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>