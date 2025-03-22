<script setup>
import AdminLayout from '../../../layouts/AdminLayout.vue';
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
        <tr>
          <td><img src="/img/heads/slim_head.png" alt="Skin Preview" style="width: 50px; height: auto;"></td>
          <td>1</td>
          <td>Skin Name</td>
          <td>Uploader Name</td>
          <td>2023-01-01</td>
          <td>2023-01-02</td>
          <td>
            <button class="button is-small is-info mx-2">Editar</button>
            <button class="button is-small is-danger">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </AdminLayout>
</template>