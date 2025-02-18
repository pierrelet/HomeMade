<template>
    <div>
      <h1>{{ chef.name }}</h1>
      <p>Spécialités :</p>
      <ul>
        <li v-for="dish in chef.dishes" :key="dish.id">
          {{ dish.name }} - {{ dish.price }}€ 
          <button @click="addToCart(dish)">Ajouter au panier</button>
        </li>
      </ul>
      <RouterLink to="/chefs">Retour à la liste</RouterLink>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useCartStore } from '@/store/cart';
  
  const route = useRoute();
  const cartStore = useCartStore();
  
  const chefs = ref([
    { id: 1, name: "Chef Pierre", dishes: [{ id: 1, name: "Bœuf Bourguignon", price: 15 }] },
    { id: 2, name: "Chef Marie", dishes: [{ id: 2, name: "Tarte Tatin", price: 8 }] }
  ]);
  
  const chef = computed(() => chefs.value.find(c => c.id == Number(route.params.id)));
  
  const addToCart = (dish: { id: number; name: string; price: number }) => {
    cartStore.addToCart(dish);
  };
  </script>
  