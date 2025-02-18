<template>
  <div>
    <header>
      <img src="../assets/logo.jpg" alt="Logo HomeMade" class="logo" />

      <h1>Bienvenue sur HomeMade!</h1>
    </header>

    <section class="intro">
      <p>Nous proposons des plats faits maison par des chefs renommés, prêts à être livrés chez vous.</p>
      <Button label="Découvrez nos chefs" />
    </section>

    <section class="features">
      <h2>Nos Services</h2>
      <ul>
        <li>Plats faits maison</li>
        <li>Livraison rapide</li>
        <li>Choix variés de chefs et de spécialités</li>
      </ul>
      <Button label="Explorez nos menus" />
    </section>
  </div>
</template>

<script setup lang="ts">
  import Button from '@/components/Button.vue';
</script>

<style scoped>
  header {
    text-align: center;
    margin-bottom: 20px;
  }

  .logo {
    width: 150px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2rem;
    color: #333;
  }

  .intro {
    text-align: center;
    margin: 20px 0;
  }

  .features {
    text-align: center;
  }

  .features ul {
    list-style-type: none;
    padding: 0;
  }

  .features li {
    margin-bottom: 10px;
    font-size: 1.2rem;
    color: #555;
  }
</style>
