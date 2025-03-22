<script setup>
import { ref, computed } from "vue";
import useSkinUploader from "../../../composables/useSkinUploader";
import useSkinRenderer from "../../../composables/useSkinRenderer";
import AdminLayout from '../../../layouts/AdminLayout.vue';
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const skinName = ref("");
const file = ref(null);
const previewUrl = ref(null);
const skinTypeId = ref(null);
const { uploadSkin, message, messageClass, isLoading } = useSkinUploader();
const { sceneRef, applySkin, toggleModelType, setRotationSpeed, togglePause, isPaused } = useSkinRenderer();
const rotationSpeed = ref(0.01);

const playPauseIcon = computed(() => (isPaused ? faPlay : faPause));

function handleFileChange(event) {
  file.value = event.target.files[0];
  if (file.value) {
    previewUrl.value = URL.createObjectURL(file.value);
    applySkin(previewUrl.value);
  } else {
    previewUrl.value = null;
  }
}

function handleSpeedChange(event) {
  setRotationSpeed(parseFloat(event.target.value));
}

function selectSkinType(type) {
  skinTypeId.value = type;
}

async function handleUpload() {
  if (!skinTypeId.value) {
    message.value = "Please select a body type.";
    messageClass.value = "error";
    return;
  }
  await uploadSkin(skinName.value, file.value, skinTypeId.value);
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
              <label class="label">Tipo de cuerpo:</label>
              <div class="buttons">
                <button 
                  class="button" 
                  :class="{'is-success': skinTypeId === 1}" 
                  @click.prevent="selectSkinType(1)">
                  Ancho
                </button>
                <button 
                  class="button" 
                  :class="{'is-success': skinTypeId === 2}" 
                  @click.prevent="selectSkinType(2)">
                  Delgado
                </button>
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
          <div v-if="previewUrl" class="box preview-box">
            <p class="subtitle is-6 has-text-centered mb-2">Preview:</p>
            <figure class="image is-128x128 is-inline-block">
              <img :src="previewUrl" alt="Skin preview" />
            </figure>
          </div>
          <div v-else class="box preview-box">
            <p class="subtitle is-6 has-text-centered">No hay textura seleccionada</p>
          </div>
          <div class="box" style="width: 300px; height: 300px; margin: auto;" ref="sceneRef"></div>
          <div class="buttons is-centered mt-4">
            <div class="buttons">
              <button class="button is-warning" @click="() => toggleModelType('wide')">
                <figure class="image is-48x48">
                  <img src="/img/heads/wide_head.png" alt="Wide Head" />
                </figure>
                Ancho
              </button>
              <button class="button is-danger" @click="() => toggleModelType('slim')">
                <figure class="image is-48x48">
                  <img src="/img/heads/slim_head.png" alt="Slim Head" />
                </figure>
                Delgado
              </button>
              <button class="button" @click="togglePause">
                <font-awesome-icon :icon="playPauseIcon" class="w-6 h-6 text-yellow-500" />
              </button>
            </div>
          </div>
          <p class="help mt-2">Arrastra horizontalmente sobre el modelo para ajustar la velocidad de rotación.</p>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<style scoped>
.preview-box {
  height: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

