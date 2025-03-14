<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import SearchBar from '../components/SearchBar/SearchBar.vue';
</script>

<template>
<DefaultLayout>

    <section class="section">

      <SearchBar />

      <h1 class="title is-2 has-text-centered">Resultados de búsqueda</h1>
      <div class="container">
        <div class="card is-large">
          <h1 class="title is-3 mt-3"></h1>
          <div class="card-content">
            <p>cositas here</p>
          </div>
        </div>
      </div>
    </section>
    
</DefaultLayout>
</template>

<style scoped>

</style>