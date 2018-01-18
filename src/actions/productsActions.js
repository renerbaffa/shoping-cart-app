import ProductsSource from '../sources/products';

import { FAILED, RETRIEVED, RETRIEVING } from '../constants/loadingStatus';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const PRODUCTS_LOADING = 'PRODUCTS_LOADING';

export function setAreProductsLoading(isLoading) {
  return {
    type: PRODUCTS_LOADING,
    meta: {
      isLoading,
    },
  };
}

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(setAreProductsLoading(RETRIEVING));
      const products = await ProductsSource.fetchProducts();
      console.log('products', products);
      dispatch(setAreProductsLoading(RETRIEVED));
    } catch (err) {
      dispatch(setAreProductsLoading(FAILED));
    }
  };
}
