import { createApp } from 'vue';
import App from './App.vue';  // Le composant principal
import router from './router/index';  // Importation du router configuré
import { createPinia } from 'pinia';  // Pinia pour la gestion de l'état

// Création de l'instance de l'application Vue
const app = createApp(App);

// Utilisation de Pinia et du router dans l'application
app.use(router);  
app.use(createPinia());  // Pour utiliser Pinia pour la gestion de l'état global

// Montage de l'application dans l'élément HTML avec l'id 'app'
app.mount('#app');
