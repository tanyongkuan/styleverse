<template>
  <div
    class="
      p-4
      xl:px-0
      py-4
      md:py-8 md:max-w-4xl
      lg:py-14 lg:max-w-5xl
      xl:py-16 xl:max-w-6xl
      flex flex-col
      gap-4
      lg:grid
      grid-cols-6
      lg:gap-12
    "
  >
    <div
      class="
        flex flex-col
        items-center
        w-full
        bg-white
        h-72
        py-4
        cursor-pointer
        col-span-2
      "
    >
      <!-- <div class="px-16 py-4 bg-white h-64"> -->
      <img :src="selectedProduct.image" class="h-full" />
      <!-- </div> -->
    </div>
    <div class="flex flex-grow self-stretch py-4 lg:py-0 gap-2 col-span-4">
      <div class="flex flex-col gap-4 lg:gap-6 flex-grow justify-between">
        <span class="text-2xl lg:text-3xl font-semibold">{{
          selectedProduct.title
        }}</span>
        <div class="flex gap-3">
          <span class="text-lg lg:text-xl text-black font-semibold"
            >${{ selectedProduct.price }}</span
          >
          <span class="text-base lg:text-lg text-neutral-500 line-through"
            >${{ (selectedProduct.price * 1.05).toFixed(2) }}</span
          >
        </div>
        <TheRating :rating="selectedProduct.rating.rate">
          <template #rating
            ><span>{{ selectedProduct.rating.count }} Sold</span></template
          >
        </TheRating>
        <div class="flex items-center justify-between">
          <NumberInput
            :value="quantity"
            @increment="() => quantity++"
            @decrement="() => (quantity > 1 ? quantity-- : undefined)"
          />
          <Button
            text="Add to Cart"
            class="bg-black text-white"
            @click="addToCart(selectedProduct, quantity)"
          >
            <template #rightIcon>
              <cart-outline-icon />
            </template>
          </Button>
        </div>
        <div class="flex flex-col gap-1 mt-4">
          <span class="text-xl lg:text-2xl font-medium">Description</span>
          <span class="text-neutral-500">{{
            selectedProduct.description
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useProductStore } from '@stores/product';
import { Product } from 'src/types';
import { storeToRefs } from 'pinia';
import TheRating from '@components/TheRating.vue';
import Button from '@components/buttons/Button.vue';
import NumberInput from '@components/input/NumberInput.vue';
import CartOutlineIcon from 'vue-material-design-icons/CartOutline.vue';
import { useCartStore } from '@stores/cart';

const productStore = useProductStore();
const cartStore = useCartStore();

const { retrieveProduct, resetSelectedProduct } = productStore;
const { selectedProduct } = storeToRefs(productStore);
const { addToCart } = cartStore;

type FeaturedProductProps = {
  id: Pick<Product, 'id'>;
};

const props = withDefaults(defineProps<FeaturedProductProps>(), {});

const quantity = ref(1);

onMounted(async () => {
  if (props.id) {
    await retrieveProduct({ id: props.id.toString() });
  }
});

onUnmounted(() => {
  resetSelectedProduct();
});
</script>
