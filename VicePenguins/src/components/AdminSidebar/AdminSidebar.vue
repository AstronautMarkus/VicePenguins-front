<script setup>
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTable, faUser, faSignInAlt, faStar, faCode, faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faTable, faUser, faSignInAlt, faStar, faCode, faBars, faGithub);
</script>

<template>
    <aside class="sidebar has-background-dark is-fullheight">
      <div class="sidebar-section">
        <router-link to="/tables" class="sidebar-item">
          <FontAwesomeIcon icon="table" class="icon" />
          <span>Tables</span>
        </router-link>
        <router-link to="/forms" class="sidebar-item">
          <FontAwesomeIcon icon="bars" class="icon" />
          <span>Forms</span>
        </router-link>
        <router-link to="/profile" class="sidebar-item">
          <FontAwesomeIcon icon="user" class="icon" />
          <span>Profile</span>
        </router-link>
        <router-link to="/login" class="sidebar-item">
          <FontAwesomeIcon icon="sign-in-alt" class="icon" />
          <span>Login</span>
        </router-link>
        <router-link to="/submenus" class="sidebar-item">
          <FontAwesomeIcon icon="code" class="icon" />
          <span>Submenus</span>
        </router-link>
      </div>
    </aside>
</template>

<style scoped>
  .sidebar {
    width: 250px;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 0px;
    margin-bottom: 12px;
    color: #fff;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  .sidebar-item .icon {
    font-size: 1.2rem;
  }

  .sidebar-item:hover {
    background-color: #858585;
    cursor: pointer;
  }

  .sidebar-header,
  .sidebar-section,
  .sidebar-footer {
    margin-bottom: 20px;
  }

  .sidebar-header {
    font-weight: bold;
    font-size: 1.2rem;
  }
</style>
