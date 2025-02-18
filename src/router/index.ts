import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import ChefsList from '../pages/ChefsList.vue';
import ChefDetails from '../pages/ChefDetails.vue';
import AuthPage from '../pages/AuthPage.vue';
import CartPage from '../pages/CartPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/chefs', component: ChefsList },
  { path: '/chef/:id', component: ChefDetails },
  { path: '/auth', component: AuthPage },
  { path: '/cart', component: CartPage }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});


export default router;
