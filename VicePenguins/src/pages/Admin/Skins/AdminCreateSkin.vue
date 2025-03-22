<script setup>
import { ref } from "vue";
import useSkinUploader from "../../../composables/useSkinUploader";
import AdminLayout from '../../../layouts/AdminLayout.vue';
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen.vue";

const skinName = ref("");
const file = ref(null);
const { uploadSkin, message, messageClass, isLoading } = useSkinUploader();

function handleFileChange(event) {
  file.value = event.target.files[0];
}

async function handleUpload() {
  await uploadSkin(skinName.value, file.value);
}
</script>

<template>
  <AdminLayout>
    <LoadingScreen v-if="isLoading" />
    <div v-else>
      <h1>Upload a Skin</h1>
      <div v-if="message" :class="messageClass">{{ message }}</div>
      <form @submit.prevent="handleUpload">
        <div>
          <label for="name">Skin Name:</label>
          <input type="text" id="name" v-model="skinName" required />
        </div>
        <div>
          <label for="file">Choose a skin file:</label>
          <input type="file" id="file" @change="handleFileChange" accept="image/png, image/jpeg" required />
        </div>
        <button type="submit" :disabled="isLoading">Upload</button>
      </form>
    </div>
  </AdminLayout>
</template>

