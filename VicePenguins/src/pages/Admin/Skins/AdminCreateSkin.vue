<script setup>
import { ref } from "vue";
import useSkinUploader from "../../../composables/useSkinUploader";
import useSkinRenderer from "../../../composables/useSkinRenderer";
import AdminLayout from '../../../layouts/AdminLayout.vue';
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.vue";

const skinName = ref("");
const file = ref(null);
const previewUrl = ref(null);
const { uploadSkin, message, messageClass, isLoading } = useSkinUploader();
const { sceneRef, applySkin } = useSkinRenderer();

function handleFileChange(event) {
  file.value = event.target.files[0];
  if (file.value) {
    previewUrl.value = URL.createObjectURL(file.value);
    applySkin(previewUrl.value);
  } else {
    previewUrl.value = null;
  }
}

async function handleUpload() {
  await uploadSkin(skinName.value, file.value);
}
</script>

<template>
  <AdminLayout>
    <LoadingScreen v-if="isLoading" />
    <div v-else>
      <h1 class="title is-2 has-text-centered mt-4">Publicar un nuevo skin</h1>
      <div v-if="message" :class="messageClass">{{ message }}</div>
      <div class="columns">
        <div class="column is-half">
          <form @submit.prevent="handleUpload" class="box">
            <div class="field">
              <label class="label" for="name">Nombre del Skin:</label>
              <div class="control">
                <input class="input" type="text" id="name" v-model="skinName" required />
              </div>
            </div>
            <div class="field">
              <label class="label" for="file">Subir archivo:</label>
              <div class="control">
                <input class="input" type="file" id="file" @change="handleFileChange" accept="image/png, image/jpeg" required />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button class="button is-primary" type="submit" :disabled="isLoading">Subir Skin</button>
              </div>
            </div>
          </form>
        </div>
        <div class="column is-half has-text-centered">
          <div v-if="previewUrl" class="box">
            <p class="subtitle is-6">Preview:</p>
            <figure class="image is-128x128 is-inline-block">
              <img :src="previewUrl" alt="Skin preview" />
            </figure>
          </div>
          <div v-else class="box">
            <p class="subtitle is-6">No hay textura seleccionada</p>
          </div>
          <div ref="sceneRef" class="box" style="width: 300px; height: 300px; margin: auto;"></div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

