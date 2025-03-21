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
}
</style>
