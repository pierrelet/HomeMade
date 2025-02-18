<!-- src/components/Logo.vue -->
<template>
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </div>
  </template>
  
  <script setup lang="ts">
  // Ce composant n'a pas besoin de logique spéciale
  </script>
  
  <style scoped>
  .logo-container {
    margin: 20px 0;
  }
  
  .logo {
    max-width: 150px;
    height: auto;
  }
  </style>
  