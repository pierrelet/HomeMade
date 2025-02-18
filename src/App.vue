<template>
  <div id="app">
   
    <nav>
   
      <div class="logo-container">
        <img src="./assets/logo.jpg" alt="HomeMade Logo" class="logo" />
      </div>

      
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/chefs">Cuisiniers</router-link></li>
        <li><router-link to="/auth">Connexion/Inscription</router-link></li>
        <li><router-link to="/cart">Panier</router-link></li>
      </ul>
    </nav>

    
    <router-view></router-view> 
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px 20px;
}

.logo-container {
  display: flex;
  align-items: center;
}

nav img.logo {
  width: 40px;
  height: auto;
  margin-right: 10px;
}


nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
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


h1 {
  font-size: 2rem;
  color: #333;
}

p {
  font-size: 1.2rem;
  color: #666;
}

button {
  padding: 10px 20px;
  font-size: 1.1rem;
  background-color: #333;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #444;
}
</style>
