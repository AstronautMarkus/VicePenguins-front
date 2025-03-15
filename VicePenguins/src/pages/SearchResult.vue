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
        <div class="card mod-card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="/img/exceptions/not-found.png" style="border-radius: 5%;" alt="Mod Image" />
                </figure>
              </div>
              <div class="media-content">
                <h2 class="title is-4">Mod info</h2>
                <p class="subtitle is-6">Mod description</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.mod-card {
  margin-bottom: 1rem;
  border-radius: 8px;
}
</style>
