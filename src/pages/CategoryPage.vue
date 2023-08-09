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
      lg:py-14 lg:gap-y-8 lg:max-w-5xl
      xl:py-16 xl:gap-y-10 xl:max-w-6xl
    "
  >
    <div class="flex justify-between w-full">
      <span class="text-2xl font-semibold capitalize">{{ props.name }}</span>
      <ButtonDropdown :options="filterOptions" />
    </div>
    <ProductListSkeleton v-if="loading" />
    <div
      v-else
      class="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        justify-stretch
        gap-8
        sm:gap-x-4
      "
    >
      <ProductListItem v-for="product in products" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useProductStore } from '@stores/product';
import { storeToRefs } from 'pinia';
import ProductListItem from '@components/ProductListItem.vue';
import ButtonDropdown from '@components/buttons/ButtonDropdown.vue';
import { DropdownItem, Product } from 'src/types';
import ProductListSkeleton from '@components/skeleton/ProductListSkeleton.vue';

type CategoryPageProps = {
  name: 'electronics' | 'jewelery' | `men's clothing` | `women's clothing`;
};

const props = withDefaults(defineProps<CategoryPageProps>(), {});

const productStore = useProductStore();
const { retrieveProducts, resetTableFilter } = productStore;
const { products, loading } = storeToRefs(productStore);

const filterOptions = ref<Array<DropdownItem>>([
  {
    name: 'Popularity',
    action: () => {
      products.value = products.value.sort(
        (a: Product, b: Product) => b.rating.count - a.rating.count
      );
    }
  },
  {
    name: 'Price High to Low',
    action: () => {
      products.value = products.value.sort(
        (a: Product, b: Product) => b.price - a.price
      );
    }
  },
  {
    name: 'Price Low to High',
    action: () => {
      products.value = products.value.sort(
        (a: Product, b: Product) => a.price - b.price
      );
    }
  }
]);

onMounted(async () => {
  const categories = ['all', 'jewelry', 'men', 'women'];

  if (categories.indexOf(props.name) !== -1) {
    await retrieveProducts(props.name);
  }
});

watch(
  () => props.name,
  async (current, prev) => {
    if (current !== prev) {
      await retrieveProducts(props.name);
    }
  }
);

onUnmounted(() => {
  resetTableFilter();
});
</script>
