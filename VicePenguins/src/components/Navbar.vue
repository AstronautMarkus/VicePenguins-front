<template>
    <nav>
      <ul>
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/about">Acerca de</RouterLink></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav {
    background: #333;
    padding: 1rem;
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  </style>
  