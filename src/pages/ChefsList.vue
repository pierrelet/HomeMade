<template>
    <div>
      <h1>Nos Cuisiniers</h1>
      <ul>
        <li v-for="chef in chefs" :key="chef.id">
          <RouterLink :to="'/chef/' + chef.id">{{ chef.name }}</RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const chefs = ref([
    { id: 1, name: "Chef Pierre" },
    { id: 2, name: "Chef Marie" }
  ]);
  </script>
  