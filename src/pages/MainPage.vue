<template>
  <div
    class="
      px-4
      xl:px-0
      py-4
      md:py-8 md:max-w-4xl
      flex flex-col
      items-center
      gap-6
      lg:py-14 lg:gap-y-14 lg:max-w-5xl
      xl:py-16 xl:gap-y-16 xl:max-w-6xl
    "
  >
    <div
      class="w-full h-96 rounded-lg bg-no-repeat bg-cover bg-center"
      style="background-image: url('src/assets/Container.png')"
    >
      <div
        class="
          w-full
          h-full
          flex flex-col
          px-4
          gap-7
          justify-center
          items-center
        "
      >
        <span
          class="
            text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
            md:font-semibold
            text-white text-center
            max-w-3xl
            lg:max-w-4xl
          "
          >Level up your style with our summer collections
        </span>
        <Button
          text="Shop Now"
          class="bg-white"
          @click="router.push(`/category/all`)"
        >
          <template #rightIcon>
            <arrow-right-icon />
          </template>
        </Button>
      </div>
    </div>
    <div class="flex flex-col gap-4 lg:gap-12 justify-items-start">
      <span class="w-156 text-2xl font-bold text-neutral-900"
        >We provide the best customer experiences</span
      >
      <!-- flex flex-col -->
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          items-start
          justify-items-stretch
          gap-5
          sm:gap-y-4
          lg:gap-12
        "
      >
        <Features
          title="Original Products"
          description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        />
        <Features
          title="Satisfaction Guarantee"
          description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        />
        <Features
          title="New Arrival Everyday"
          description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        />
        <Features
          title="Fast & Free Shopping"
          description="Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean."
        />
      </div>
    </div>
    <div class="flex flex-col w-full gap-12 justify-items-start">
      <span class="text-3xl font-bold">Featured Products</span>
      <div
        class="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          justify-stretch
          gap-8
          sm:gap-x-4
        "
      >
        <ProductListItem
          v-for="featuredProduct in featuredProducts"
          :key="featuredProduct.id"
          :product="featuredProduct"
        />
      </div>
    </div>
    <Categories />
  </div>
</template>

<script setup lang="ts">
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue';
import Features from '@components/Features.vue';
import ProductListItem from '@components/ProductListItem.vue';
import { useProductStore } from '@stores/product';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import Button from '@components/buttons/Button.vue';
import Categories from '@components/landing/Categories.vue';
import { useRouter } from 'vue-router';

const productStore = useProductStore();
const router = useRouter();

const { featuredProducts } = storeToRefs(productStore);

onMounted(async () => {
  await productStore.retrieveFeaturedProducts();
});
</script>

<style scoped></style>
