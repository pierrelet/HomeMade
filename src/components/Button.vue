<template>
    <button @click="handleClick">{{ label }}</button>
  </template>
  
  <script setup lang="ts">
    import { defineProps } from 'vue';
  
    const props = defineProps({
      label: {
        type: String,
        required: true
      }
    });
  
    function handleClick() {
      console.log('Le bouton a été cliqué');
    }
  </script>
  
  <style scoped>
    button {
      padding: 10px 20px;
      background-color: #42b983;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #368a64;
    }
  </style>
  