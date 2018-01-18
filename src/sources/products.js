import axios from 'axios';

export const FETCH_PRODUCTS_URL =
  'https://private-3efa8-products123.apiary-mock.com/products';

const accept = 'Accept';
const contentType = 'Content-Type';
const APPLICATION_TYPE = 'application/json';

const ERROR_MSG = 'Error on fetching products';

export async function fetchProducts() {
  try {
    const response = await axios.get(FETCH_PRODUCTS_URL);
    if (response.status === 200) {
      return response.data.products;
    } else {
      throw new Error(ERROR_MSG);
    }
  } catch (err) {
    throw new Error(ERROR_MSG);
  }
}

export default {
  fetchProducts,
};
