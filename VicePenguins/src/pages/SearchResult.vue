<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import SearchBar from '../components/SearchBar/SearchBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <DefaultLayout>
    <section class="section">
      
      <SearchBar />

      <h1 class="title is-2 has-text-centered">Resultados de búsqueda</h1>
      
      <div class="container">
        <router-link to="" class="card mod-card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-128x128">
                  <img src="/img/exceptions/not-found.png" style="border-radius: 5%;" alt="Mod Image" />
                </figure>
              </div>
              <div class="media-content">
                <router-link to="/mod-details">
                  <h2 class="title is-4">Mod info</h2>
                </router-link>
                <p class="subtitle is-6">Mod description</p>
                <p></p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </DefaultLayout>
</template>

<style scoped>
.mod-card {
  margin-bottom: 1rem;
  border-radius: 8px;
  display: block;
  color: inherit;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.mod-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.mod-card .media-content h2 {
  transition: color 0.2s;
}

</style>
