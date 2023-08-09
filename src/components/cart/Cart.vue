<template>
  <div
    class="
      flex flex-col
      gap-8
      absolute
      right-0
      top-0
      lg:top-20
      bg-white
      z-50
      p-5
      lg:w-96
      shadow-inner
      w-full
      h-screen
      lg:h-max
      transition-transform
    "
  >
    <div class="flex justify-between">
      <span class="text-xl text-gray-500">Products in your cart</span>
      <ButtonFloating
        class="lg:hidden text-red-500"
        @click="() => (showCart = false)"
      >
        <close-icon />
      </ButtonFloating>
    </div>
    <div class="flex items-center gap-5" v-for="item in cart" key="product.id">
      <img :src="item.image" class="w-20 h-24" alt="" />
      <div class="flex flex-col">
        <span class="text-lg font-medium">{{ item.title }}</span>
        <p class="text-neutral-500">
          {{
            item.description.length > 100
              ? `${item.description.substring(0, 100)}...`
              : item.description
          }}
        </p>
        <div class="text-base text-black font-semibold pt-4">
          {{ `${item.quantity} x $${item.price}` }}
        </div>
      </div>
      <ButtonFloating class="text-red-500" @click="removeFromCart(item)">
        <delete-outline-icon />
      </ButtonFloating>
    </div>
    <div class="flex justify-between text-base">
      <span>SUBTOTAL</span>
      <span>${{ totalPrice() }}</span>
    </div>
    <Button
      v-if="cart.length > 0"
      text="PROCEED TO CHECKOUT"
      class="bg-black text-white"
      @click="executePayment"
    />
    <span class="text-sm" v-else>Your cart is empty</span>
    <!-- <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span> -->
  </div>
</template>
<script setup lang="ts">
import Button from '@components/buttons/Button.vue';
import DeleteOutlineIcon from 'vue-material-design-icons/DeleteOutline.vue';
import { useCartStore } from '@stores/cart';
import { storeToRefs } from 'pinia';
import ButtonFloating from '@components/buttons/ButtonFloating.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';
import { usePaymentStore } from '@stores/payment';
import router from 'src/router';

const cartStore = useCartStore();
const paymentStore = usePaymentStore();

const { cart, showCart } = storeToRefs(cartStore);
const { removeFromCart } = cartStore;
const { makePayment } = paymentStore;

const executePayment = async () => {
  const response = await makePayment();

  window.location.href = response?.data.url;
};

const totalPrice = () => {
  let total = 0;
  cart.value.forEach((item) => {
    total += item.quantity * item.price;
  });
  return total.toFixed(2);
};
</script>
