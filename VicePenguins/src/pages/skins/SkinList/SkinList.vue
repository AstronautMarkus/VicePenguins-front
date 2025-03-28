<script setup>
import DefaultLayout from '../../../layouts/DefaultLayout.vue';
import { ref, onMounted } from 'vue';
import useFetchSkins from './useFetchSkins';
import LoadingScreen from '../../../components/LoadingScreen/LoadingScreen.vue';

const { skins, isLoading, fetchSkins } = useFetchSkins();

onMounted(() => {
  fetchSkins();
});
</script>

<template>
  <DefaultLayout>
    <LoadingScreen v-if="isLoading"/>
    <div v-else class="skins-list">
      <div v-for="skin in skins" :key="skin.id" class="skin-card">
        <img :src="skin.preview_image_url" alt="Skin preview" class="skin-image" />
        <h3 class="skin-title">{{ skin.name }}</h3>
        <p class="skin-uploader">{{ skin.uploader }}</p>
      </div>
    </div>
  </DefaultLayout>
</template>

<style scoped>
.loading-screen {
  text-align: center;
  font-size: 1.5rem;
  margin-top: 2rem;
}

.skins-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.skin-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  width: 200px;
}

.skin-image {
  max-width: 100%;
  border-radius: 4px;
}

.skin-title {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.skin-uploader {
  font-size: 0.9rem;
  color: #555;
}
</style>
