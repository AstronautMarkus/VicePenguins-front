<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue';
import { categories } from '../components/categories/categories_data';
import CategoryCard  from '../components/categories/categories_card.vue';
</script>

<template>
  <DefaultLayout>

    <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="(category, index) in categories" :key="index">
            <CategoryCard :title="category.title" :icon="category.icon" :url="category.url" />
          </div>
        </div>
    </div>

  </DefaultLayout>
</template>
