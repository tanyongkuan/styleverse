import { getProduct, getProducts, getProductsByCategory } from '@helpers/api';
import { Product, TableFilter } from 'src/types';
import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
  const defaultSelected: Product = {
    id: '',
    title: '',
    price: 0,
    category: '',
    description: '',
    rating: {
      count: 0,
      rate: 0
    },
    image: ''
  };
  const selectedProduct = ref({ ...defaultSelected });

  const resetSelectedProduct = () =>
    (selectedProduct.value = { ...defaultSelected });

  const retrieveProduct = async ({ id }: Pick<Product, 'id'>) => {
    try {
      const { data } = await getProduct({ id });
      selectedProduct.value = data;
    } catch (err) {}
  };

  const isFulfilled = <T>(
    p: PromiseSettledResult<T>
  ): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';
  const featuredProducts = ref<Array<Product>>([]);

  const retrieveFeaturedProducts = async () => {
    const response = await Promise.allSettled<AxiosResponse<Product>>([
      getProduct({ id: '1' }),
      getProduct({ id: '4' }),
      getProduct({ id: '5' }),
      getProduct({ id: '8' })
    ]);

    if (response) {
      featuredProducts.value = response
        .filter(isFulfilled)
        .map((res) => res.value.data);
    }
  };

  const defaultTableFilter: TableFilter = {
    limit: 0,
    sort: undefined
  };

  const tableFilter = ref({ ...defaultTableFilter });
  const products = ref<Array<Product>>([]);

  const resetTableFilter = () =>
    (tableFilter.value = { ...defaultTableFilter });

  const loading = ref(false);

  const retrieveProducts = async (category: string) => {
    try {
      loading.value = true;

      tableFilter.value = {
        limit: 0
      };

      if (category === 'men') {
        category = `men's clothing`;
      } else if (category === 'women') {
        category = `women's clothing`;
      } else if (category === 'all') {
        category = '';
        // tableFilter.value = { limit: 13 };
      } else if (category === 'jewelry') {
        category = 'jewelery';
      }

      let response;

      if (category === '') {
        response = await getProducts(tableFilter.value);
        response.data = response.data.filter(
          (val) => val.category !== 'electronics'
        );
      } else {
        response = await getProductsByCategory(category, tableFilter.value);
      }

      products.value = response.data.sort(
        (a: Product, b: Product) => b.rating.count - a.rating.count
      );
    } catch (err) {}
    loading.value = false;
  };

  return {
    selectedProduct,
    resetSelectedProduct,
    retrieveProduct,
    featuredProducts,
    retrieveFeaturedProducts,
    tableFilter,
    products,
    loading,
    resetTableFilter,
    retrieveProducts
  };
});
