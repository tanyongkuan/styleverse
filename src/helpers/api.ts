import { api } from './axios';
import { Product, ProductCart, StripeCartItem, TableFilter } from 'src/types';

export const getProduct = ({ id }: Pick<Product, 'id'>) => {
  return api.get<Product>(`/products/${id}`);
};

export const getProducts = (filter: TableFilter) => {
  return api.get<Array<Product>>(`/products`, {
    params: {
      ...filter
    }
  });
};

export const getProductsByCategory = (
  category: string,
  filter: TableFilter
) => {
  return api.get<Array<Product>>(`/products/category/${category}`, {
    params: {
      ...filter
    }
  });
};

export const initStripePayment = (cart: Array<ProductCart>) => {
  const line_items: Array<StripeCartItem> = cart.map((item) => {
    return {
      price_data: {
        currency: 'SGD',
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image]
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    };
  });

  const query = buildQuery({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: import.meta.env.DEV
      ? import.meta.env.BASE_URL
      : 'https://yk-styleverse.netlify.app/',
    cancel_url: import.meta.env.DEV
      ? import.meta.env.BASE_URL
      : 'https://yk-styleverse.netlify.app/',
    line_items
  });

  return api.post(
    `https://api.stripe.com/v1/checkout/sessions?${query}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_STRIPE_API}`,
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
  );
};

const buildQuery = (data: Object, prefix = ''): string => {
  // Determine the data type
  const type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

  // Loop through the object and create the query string
  return Object.keys(data)
    .map((key, index) => {
      // Cache the value of the item
      const value = data[key as keyof Object];

      // Add the correct string if the object item is an array or object
      if (type === 'array') {
        key = prefix + '[' + index + ']';
      } else if (type === 'object') {
        key = prefix ? prefix + '[' + key + ']' : key;
      }

      // If the value is an array or object, recursively repeat the process
      if (typeof value === 'object') {
        return buildQuery(value, key);
      }

      // Join into a query string
      return key + '=' + encodeURIComponent(value.toString());
    })
    .join('&');
};
