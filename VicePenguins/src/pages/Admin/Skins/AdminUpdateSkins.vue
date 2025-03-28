<script setup>
import AdminLayout from '../../../layouts/AdminLayout.vue';
import { ref, onMounted } from 'vue';
import useSkinUpdater from '../../../composables/useSkinUpdater';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const skinId = ref(route.params.id);
const skinName = ref('');
const skinTypeId = ref(1);
const file = ref(null);

const { updateSkin, message, messageClass, isLoading } = useSkinUpdater();

async function fetchSkinData() {
  try {
    const API_URL = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${API_URL}/skins/${skinId.value}`);
    if (response.status === 200) {
      const skin = response.data;
      skinName.value = skin.name;
      skinTypeId.value = skin.skin_type_id;
    } else {
      alert("Failed to fetch skin data.");
    }
  } catch (error) {
    console.error("Error fetching skin data:", error);
    alert("An error occurred while fetching skin data.");
  }
}

function handleFileChange(event) {
  file.value = event.target.files[0];
}

async function submitUpdate() {
  await updateSkin(Number(skinId.value), skinName.value || undefined, file.value, skinTypeId.value || undefined);
}

onMounted(fetchSkinData);
</script>

<template>
  <AdminLayout>
    <div class="container">
      <h1 class="title has-text-centered mt-4">Actualizar Skin</h1>
      <div class="box">
        <div class="field">
          <label class="label">Skin ID</label>
          <div class="control">
            <input v-model="skinId" class="input" type="number" disabled />
          </div>
        </div>
        <div class="field">
          <label class="label">Nombre del Skin</label>
          <div class="control">
            <input v-model="skinName" class="input" type="text" placeholder="Ingrese el nuevo nombre del skin" />
          </div>
        </div>
        <div class="field">
          <label class="label">Tipo de Skin</label>
          <div class="control">
            <div class="select">
              <select v-model="skinTypeId">
                <option value="1">Tipo 1</option>
                <option value="2">Tipo 2</option>
              </select>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Archivo (opcional)</label>
          <div class="control">
            <input class="input" type="file" @change="handleFileChange" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" :disabled="isLoading" @click="submitUpdate">
              Actualizar Skin
            </button>
          </div>
        </div>
        <p v-if="message" :class="messageClass">{{ message }}</p>
      </div>
    </div>
  </AdminLayout>
</template>
