<template>
  <div
    class="
      flex flex-col
      items-start
      gap-2
      self-stretch
      border border-solid border-gray-200
      bg-white
      rounded-lg
    "
  >
    <div class="pt-1 pl-1">
      <div
        class="
          flex
          bg-neutral-100
          font-semibold
          items-center
          rounded
          text-xs
          px-1
          gap-1
        "
      >
        <star-icon class="text-yellow-300" />
        <span class="text-neutral-500">{{ product.rating.rate }}</span>
      </div>
    </div>
    <div
      class="flex flex-col items-center h-64 w-full cursor-pointer"
      @click="linkToProduct"
    >
      <img :src="product.image" class="h-full" />
    </div>
    <div
      class="flex items-end self-stretch gap-2 border-t border-neutral-200 p-2"
    >
      <div
        class="flex flex-col gap-1 flex-grow justify-between cursor-pointer"
        @click="linkToProduct"
      >
        <span class="text-lg font-semibold ellipsis h-14">{{
          product.title
        }}</span>
        <div class="flex gap-3">
          <span class="text-lg text-black font-semibold">
            ${{ product.price }}
          </span>
          <span class="text-base text-neutral-500 line-through">
            ${{ (product.price * 1.05).toFixed(2) }}
          </span>
        </div>
      </div>
      <ButtonIcon class="bg-black text-white" @click="addToCart(product, 1)">
        <cart-outline-icon />
      </ButtonIcon>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Product } from 'src/types';
import ButtonIcon from '@components/buttons/ButtonIcon.vue';
import CartOutlineIcon from 'vue-material-design-icons/CartOutline.vue';
import StarIcon from 'vue-material-design-icons/Star.vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@stores/cart';

type FeaturedProductProps = {
  product: Product;
};

const props = withDefaults(defineProps<FeaturedProductProps>(), {});
const router = useRouter();
const cartStore = useCartStore();

const { addToCart } = cartStore;

const linkToProduct = () => {
  router.push(`/item/${props.product.id}`);
};
</script>

<style scoped>
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
