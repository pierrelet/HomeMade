<template>
  <div id="app">
    <!-- Barre de navigation -->
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/chefs">Cuisiniers</router-link></li>
        <li><router-link to="/auth">Connexion/Inscription</router-link></li>
        <li><router-link to="/cart">Panier</router-link></li>
      </ul>
    </nav>

    <!-- Rendu du contenu selon la route -->
    <router-view></router-view> <!-- Affiche le composant correspondant à la route actuelle -->
  </div>
</template>

<script setup lang="ts">
// Ici, tu peux importer des composants, gérer des données ou des événements si nécessaire
</script>

<style scoped>
/* Styles généraux pour l'application */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

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
  color: white;
  font-size: 16px;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>

