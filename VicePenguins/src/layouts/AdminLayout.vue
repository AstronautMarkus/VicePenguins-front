<script setup>
import AdminSidebar from '../components/Admin/AdminSidebar/AdminSidebar.vue';
import AdminNavbar from '../components/Admin/AdminNavbar/AdminNavbar.vue';
</script>

<template>
  <div class="layout">
    <AdminNavbar />
    <div class="content">
      <AdminSidebar />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: flex;
  flex: 1;
  margin-left: 250px; 
  margin-top: var(--navbar-height);
}

main {
  flex: 1;
  padding: 1rem;
  overflow-y: auto; 
  height: calc(100vh - var(--navbar-height));
}

AdminSidebar {
  height: 100%;
  flex-shrink: 0;
  position: fixed;
  top: var(--navbar-height);
  left: 0;
  width: 250px;
  overflow-y: auto;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

:root {
  --navbar-height: 60px;
}

AdminNavbar {
  height: var(--navbar-height);
  flex-shrink: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
