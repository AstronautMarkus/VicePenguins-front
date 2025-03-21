<script setup>
import { ref, onMounted } from 'vue';
import { useThemeConsumer } from '../../../composables/theme';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSun, faMoon, faUser, faShieldAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import jwtDecode from 'jwt-decode';

const { theme, toggleTheme } = useThemeConsumer();
const isMenuOpen = ref(false);
const username = ref(null);
const roleId = ref(null);
const isLogoutModalOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const openLogoutModal = () => {
  isLogoutModalOpen.value = true;
};

const closeLogoutModal = () => {
  isLogoutModalOpen.value = false;
};

const confirmLogout = () => {
  localStorage.removeItem('token');
  username.value = null;
  roleId.value = null;
  window.location.href = '/auth/login';
};

onMounted(() => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      username.value = decoded.username;
      roleId.value = decoded.role_id;
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      localStorage.removeItem('token'); 
    }
  }
});
</script>

<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/admin">
        <img src="/img/logo/vicepenguins_logo.png" 
             alt="Foro Mods" width="150px" height="auto">
      </a>
      <a role="button" class="navbar-burger" :class="{ 'is-active': isMenuOpen }" 
         aria-label="menu" aria-expanded="false" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <template v-if="username">
              <span class="navbar-item">
                <span v-if="roleId === 1" class="icon">
                  <font-awesome-icon :icon="faUser" class="w-6 h-6 text-gray-500" />
                </span>
                <span v-else-if="roleId === 2" class="icon">
                  <font-awesome-icon :icon="faShieldAlt" class="w-6 h-6 text-blue-500" />
                </span>
                <span v-else-if="roleId === 3" class="icon">
                  <font-awesome-icon :icon="faCog" class="w-6 h-6 text-red-500" />
                </span>
                {{ username }}
              </span>
              <button class="button is-danger" @click="openLogoutModal">Cerrar Sesión</button>
            </template>

            <template v-else>
              <a href="/auth/register" class="button is-success"><strong>Registrarse</strong></a>
              <a href="/auth/login" class="button is-info">Iniciar Sesión</a>
            </template>

            <button class="button is-dark icon-button" @click="toggleTheme">
              <span v-if="theme === 'light'" class="icon">
                <font-awesome-icon :icon="faMoon" class="w-6 h-6 text-gray-900" />
              </span>
              <span v-else class="icon">
                <font-awesome-icon :icon="faSun" class="w-6 h-6 text-yellow-500" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>


  <div class="modal" :class="{ 'is-active': isLogoutModalOpen }">
    <div class="modal-background" @click="closeLogoutModal"></div>
    <div class="modal-content is-flex is-justify-content-center is-align-items-center">
      <div class="box has-text-centered">
        <p class="title is-5">Confirmar Cierre de Sesión</p>
        <p>¿Estás seguro de que deseas cerrar sesión?</p>
        <div class="buttons mt-4 is-flex is-justify-content-center">
          <button class="button is-danger" @click="confirmLogout">Sí, cerrar sesión</button>
          <button class="button" @click="closeLogoutModal">Cancelar</button>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="closeLogoutModal"></button>
  </div>
</template>

<style scoped>
.navbar {
  padding: 0.5rem 1rem;
}
</style>
