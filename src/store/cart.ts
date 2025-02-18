import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as { id: number; name: string; price: number }[]
  }),
  actions: {
    addToCart(item: { id: number; name: string; price: number }) {
      this.cart.push(item);
    },
    removeFromCart(id: number) {
      this.cart = this.cart.filter(item => item.id !== id);
    }
  }
});
