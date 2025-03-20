<script setup>
import AdminLayout from '../../layouts/AdminLayout.vue';
import { ChartBarIcon, UserGroupIcon, EyeIcon, BellIcon, ArchiveBoxIcon, PlusCircleIcon, ListBulletIcon } from '@heroicons/vue/24/outline';

const stats = [
  { label: "Mods Publicados", value: 0, icon: ChartBarIcon },
  { label: "Usuarios activos", value: 0, icon: UserGroupIcon },
  { label: "Visitas totales", value: 0, icon: EyeIcon },
  { label: "Mods en revisión", value: 0, icon: ArchiveBoxIcon },
  { label: "Notificaciones", value: 0, icon: BellIcon },
];

const actions = [
  { label: "Listar Mods", icon: ListBulletIcon, route: "/mods" },
  { label: "Publicar un Mod", icon: PlusCircleIcon, route: "/mods/create" },
  { label: "Listar Usuarios", icon: ListBulletIcon, route: "/users" },
  { label: "Crear Usuario", icon: PlusCircleIcon, route: "/users/create" },
];
</script>

<template>
  <AdminLayout>
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered">Resumen general</h1>

        <div class="columns is-multiline is-centered mt-5">
          <div v-for="stat in stats" :key="stat.label" class="column is-one-fifth">
            <div class="box has-text-centered">
              <p class="heading">{{ stat.label }}</p>
              <p class="title">{{ stat.value }}</p>
              <component :is="stat.icon" class="icon is-large" />
            </div>
          </div>
        </div>

        <h2 class="subtitle has-text-centered mt-6">Acciones Rápidas</h2>
        <div class="columns is-multiline is-centered">
          <div v-for="action in actions" :key="action.label" class="column is-one-quarter">
            <router-link :to="action.route" class="button is-primary is-fullwidth">
              <component :is="action.icon" class="icon-button" />
              {{ action.label }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </AdminLayout>
</template>

<style scoped>
.box {
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.icon {
  margin-top: 10px;
  width: 30px;
  height: 30px;
  color: #4a4a4a;
}

.icon-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

</style>
