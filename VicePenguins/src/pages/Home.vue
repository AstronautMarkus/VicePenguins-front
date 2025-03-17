<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { categories } from '../components/Categories/CategoriesData';
import CategoryCard  from '../components/Categories/CategoriesCard.vue';
import SearchBar from '../components/SearchBar/SearchBar.vue';
</script>

<template>
  <DefaultLayout>
    <section class="hero is-medium is-transparent">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-vcentered">
            <div class="column is-8">
              <h1 class="title is-1">¿Buscando algo nuevo, colega?</h1>
              <p class="subtitle is-4">
                Bienvenido a VicePenguins, tu página de mods para Minecraft.
              </p>
            </div>
            
            <div class="column is-4">
              <figure class="penguin-image">
                <img src="/img/logo/PenguinPixel.png" alt="Pingüino">
              </figure>
            </div>

          </div>
        </div>

        <SearchBar />

      </div>
    </section>

    <div class="container has-text-centered">
      <h1 class="title is-2">Selecciona una categoría</h1>
      <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="(category, index) in categories" :key="index">
        <CategoryCard :title="category.title" :icon="category.icon" :url="category.url" />
        </div>
      </div>
    </div>

    <section class="section">
      <div class="container">
        <div class="card is-large">
          <h1 class="title is-3 mt-3">Featured Mods</h1>
          <div class="card-content">
            <p>aqui irian los mocs</p>
          </div>
          <h1 class="title is-3 mt-3">Featured Mods</h1>
          <div class="card-content">
            <p>aqui irian los mocs</p>
          </div>
          <h1 class="title is-3 mt-3">Featured Mods</h1>
          <div class="card-content">
            <p>aqui irian los mocs</p>
          </div> 
        </div>
      </div>
    </section>
    
  </DefaultLayout>
</template>

<style scoped>

.penguin-image {
  width: 200px;
}

.card.is-large {
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

</style>