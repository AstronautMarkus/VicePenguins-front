<script setup>
import AdminLayout from '../../../layouts/AdminLayout.vue';
import { ref, onMounted } from 'vue';
import useListSkins from '../../../composables/useListSkins';

const skins = ref([]);
const { fetchSkins } = useListSkins();

onMounted(async () => {
  skins.value = await fetchSkins();
});
</script>

<template>
  <AdminLayout>
    <div class="buttons is-centered mt-4">
      <h1 class="title has-text-centered mt-4">Lista de Skins</h1>
      <router-link to="/admin/skins/create" class="button is-success mx-5">Añadir Skin</router-link>
    </div>
    <table class="table is-fullwidth is-striped mt-4">
      <thead>
        <tr>
          <th>Preview</th>
          <th>ID</th>
          <th>Nombre</th>
          <th>Subido por</th>
          <th>Fecha subida</th>
          <th>Fecha modificación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="skin in skins" :key="skin.id">
          <td><img :src="skin.preview_image_url" alt="Skin Preview" style="width: 50px; height: auto;"></td>
          <td>{{ skin.id }}</td>
          <td>{{ skin.name }}</td>
          <td>{{ skin.uploader }}</td>
          <td>{{ new Date(skin.created_at).toLocaleDateString() }}</td>
          <td>X</td>
          <td>
            <button class="button is-small is-info mx-2">Editar</button>
            <button class="button is-small is-danger">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminLayout>
</template>