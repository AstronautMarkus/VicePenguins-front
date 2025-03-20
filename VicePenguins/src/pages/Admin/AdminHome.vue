<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import AdminLayout from '../../layouts/AdminLayout.vue'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen.vue';
import { ChartBarIcon, UserGroupIcon, EyeIcon, BellIcon, ArchiveBoxIcon, PlusCircleIcon, ListBulletIcon } from '@heroicons/vue/24/outline';

const stats = ref([]);
const updatedAt = ref('');
const isLoading = ref(true);
const errorMessage = ref('');

const fetchStats = async () => {
  try {
    const API_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/stats/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    const data = response.data;

    stats.value = [
      { label: "Mods Publicados", value: data.total_mods, icon: ChartBarIcon },
      { label: "Usuarios activos", value: data.users_active, icon: UserGroupIcon },
      { label: "Visitas totales", value: data.total_views, icon: EyeIcon },
      { label: "Mods en revisión", value: data.mods_in_review, icon: ArchiveBoxIcon },
      { label: "Notificaciones", value: data.notifications, icon: BellIcon },
    ];
    updatedAt.value = data.updated_at;
  } catch (error) {
    console.error("Error fetching stats:", error);
    errorMessage.value = "No se pudieron cargar las estadísticas. Inténtalo de nuevo más tarde.";
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchStats);

const actions = [
  { label: "Listar Mods", icon: ListBulletIcon, route: "/" },
  { label: "Publicar un Mod", icon: PlusCircleIcon, route: "/" },
  { label: "Listar Usuarios", icon: ListBulletIcon, route: "/" },
  { label: "Crear Usuario", icon: PlusCircleIcon, route: "/" },
];
</script>

<template>
  <AdminLayout>
    <section class="section">
      <div class="container">
        <h1 class="title has-text-centered">Resumen general</h1>
        <LoadingScreen v-if="isLoading" />
        <div v-else-if="errorMessage" class="has-text-centered">
          <p class="is-size-5  has-text-danger">{{ errorMessage }}</p>
        </div>

        <div v-else>
          <div class="columns is-multiline is-centered mt-5">
            <div v-for="stat in stats" :key="stat.label" class="column is-one-fifth">
              <div class="box has-text-centered">
                <p class="subtitle">{{ stat.label }}</p>
                <p class="title">{{ stat.value }}</p>
                <component :is="stat.icon" class="subtitle icon is-medium" />
              </div>
            </div>
          </div>
        </div>
        <p v-if="stats.length" class="is-size-6 mt-4 has-text-right">Última actualización: {{ updatedAt }}</p>
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
  color: #fff;
}

.icon {
  margin-top: 10px;
  width: 30px;
  height: 30px;
}

.icon-button {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.is-size-7 {
  font-size: 0.875rem;
}
</style>
