<template>
    <div>
      <Navbar />
      <main>
        <slot />
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Navbar from '../components/Navbar.vue';
  import Footer from '../components/Footer.vue';
  </script>
  
  <style scoped>
  main {
    padding: 1rem;
    min-height: 80vh;
  }
  </style>
  