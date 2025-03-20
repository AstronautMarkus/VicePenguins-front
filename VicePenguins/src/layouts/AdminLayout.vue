<script setup>
import AdminSidebar from '../components/AdminSidebar/AdminSidebar.vue';
import AdminNavbar from '../components/AdminNavbar/AdminNavbar.vue';
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
</style>
