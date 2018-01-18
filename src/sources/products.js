import axios from 'axios';

export const FETCH_PRODUCTS_URL =
  'https://private-3efa8-products123.apiary-mock.com/products';

export const ERROR = { hasError: true };

export async function fetchProducts() {
  try {
    const response = await axios.get(FETCH_PRODUCTS_URL);
    let products = [];

    if (response.status === 200 &&
        response.data.products &&
        response.data.products.length > 0) {
      products = response.data.products;
    }

    return {
      hasError: false,
      products,
    };
  } catch (err) {
    return ERROR;
  }
}

export default {
  fetchProducts,
};
