<template>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/chefs">Cuisiniers</router-link></li>
        <li><router-link to="/auth">Connexion/Inscription</router-link></li>
        <li><router-link to="/cart">Panier</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script setup lang="ts">
 
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  nav ul {
    list-style-type: none;
    display: flex;
    justify-content: space-around;
  }
  
  nav ul li {
    margin: 0 15px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: rgb(171, 169, 169);
    font-size: 16px;
  }
  
  nav ul li a:hover {
    text-decoration: underline;
  }
  </style>
  