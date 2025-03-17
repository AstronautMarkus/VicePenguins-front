<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<template>
  <footer class="footer has-background-dark has-text-white-ter">
    <div class="content has-text-centered">
      <p>© {{ currentYear }} - Todos los derechos reservados</p>
    </div>
  </footer>
</template>

<style scoped>
</style>
