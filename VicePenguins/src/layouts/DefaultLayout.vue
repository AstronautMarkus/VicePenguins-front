<template>
    <div class="layout">
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
  
  <style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    padding: 1rem;
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
