<template>
    <div class="auth-container">
      <h1>{{ isLogin ? 'Connexion' : 'Inscription' }}</h1>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="username">Nom d'utilisateur</label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            placeholder="Nom d'utilisateur" 
            required
          />
        </div>
        
        <div class="input-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="Email" 
            required
          />
        </div>
        
        <div class="input-group">
          <label for="password">Mot de passe</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Mot de passe" 
            required
          />
        </div>
  
        <button type="submit">{{ isLogin ? 'Se connecter' : 'S’inscrire' }}</button>
      </form>
  
      <p>
        {{ isLogin ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?" }}
        <button @click="toggleAuthMode">{{ isLogin ? 'Inscrivez-vous' : 'Connectez-vous' }}</button>
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useCartStore } from '@/store/cart';
  
  const router = useRouter();
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  
  const isLogin = ref(true);
  
  
  const handleSubmit = () => {
    if (isLogin.value) {
      
      console.log('Connexion réussie pour:', username.value);
      router.push('/');  
    } else {
     
      console.log('Inscription réussie pour:', username.value);
      router.push('/');  
    }
  };
  
  
  const toggleAuthMode = () => {
    isLogin.value = !isLogin.value;
  };
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .input-group {
    margin-bottom: 15px;
    width: 100%;
  }
  
  input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  p {
    margin-top: 20px;
  }
  
  p button {
    background: none;
    color: #007bff;
    border: none;
    cursor: pointer;
  }
  
  p button:hover {
    text-decoration: underline;
  }
  </style>
  