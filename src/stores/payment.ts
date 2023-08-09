import { defineStore } from 'pinia';
import { initStripePayment } from '@helpers/api';
import { useCartStore } from './cart';

export const usePaymentStore = defineStore('payment', () => {
  const cartStore = useCartStore();

  const makePayment = async () => {
    try {
      const response = initStripePayment(cartStore.cart);
      return response;
    } catch (err) {}
  };

  return { makePayment };
});
