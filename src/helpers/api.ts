import { api } from './axios';
import { Product, ProductCart, TableFilter } from '@types/index';

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
  const line_items = cart.map((item) => {
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
    success_url: 'http://my-website.com/success/',
    cancel_url: 'http://my-website.com/checkout/',
    line_items
  });

  return api.post(
    `https://api.stripe.com/v1/checkout/sessions?${query}`,
    {},
    {
      headers: {
        Authorization: `Bearer sk_test_51Nd5r6KnHU6RkHWC3tvxAVhtXMNWRI2mo81CKpYWLiZT3sfRTgMT7qgTqhRzSOWXVcTFvtslgT0giTXHzJPuBLP600Z9UMwkzK`,
        'Content-type': 'application/x-www-form-urlencoded'
      }
      // body: buildQuery({
      //   payment_method_types: ['card'],
      //   mode: 'payment',
      //   success_url: 'http://my-website.com/success/',
      //   cancel_url: 'http://my-website.com/checkout/',
      //   line_items
      // })
    }
  );

  function buildQuery(data, prefix = '') {
    // Determine the data type
    var type = Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

    // Loop through the object and create the query string
    return Object.keys(data)
      .map(function (key, index) {
        // Cache the value of the item
        var value = data[key];

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
        return key + '=' + encodeURIComponent(value);
      })
      .join('&');
  }
};
