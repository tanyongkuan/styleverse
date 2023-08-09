import { Product, ProductCart } from '@types/index';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCartStore = defineStore(
  'store',
  () => {
    const cart = ref<Array<ProductCart>>([]);
    const showCart = ref(false);

    const addToCart = (val: Product, quantity: number) => {
      const index = cart.value.findIndex((item) => item.id === val.id);
      if (index === -1) {
        cart.value.push({ ...val, quantity });
      } else {
        cart.value[index].quantity += quantity;
      }
    };

    const removeFromCart = (val: Product) => {
      cart.value = cart.value.filter((item) => item.id !== val.id);
    };

    return {
      cart,
      showCart,
      addToCart,
      removeFromCart
    };
  },
  {
    persist: true
  }
);
