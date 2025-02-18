<template>
    <div>
      <h1>Votre Panier</h1>
      <ul>
        <li v-for="item in cartStore.cart" :key="item.id">
          {{ item.name }} - {{ item.price }}€ 
          <button @click="cartStore.removeFromCart(item.id)">Retirer</button>
        </li>
      </ul>
      <RouterLink to="/">Retour à l'accueil</RouterLink>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useCartStore } from '@/store/cart';
  
  const cartStore = useCartStore();
  </script>
  