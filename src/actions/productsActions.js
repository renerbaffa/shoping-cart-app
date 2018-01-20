import ProductsSource from '../sources/products';

import { FAILED, RETRIEVED, RETRIEVING } from '../constants/loadingStatus';

export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const PRODUCTS_LOADING = 'PRODUCTS_LOADING';

export function setAreProductsLoading(isLoading) {
  return {
    type: PRODUCTS_LOADING,
    meta: {
      isLoading,
    },
  };
}

export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    meta: {
      isLoading: RETRIEVED,
    },
    payload: {
      products,
    },
  };
}

export function shouldFetch(products) {
  return products.ids.length === 0;
}

export function fetchProducts() {
  return async (dispatch, getState) => {
    if (shouldFetch(getState().products)) {
      try {
        dispatch(setAreProductsLoading(RETRIEVING));
        const response = await ProductsSource.fetchProducts();
        if (response.hasError) {
          dispatch(setAreProductsLoading(FAILED));
        } else {
          dispatch(updateProducts(response.products));
        }
      } catch (err) {
        dispatch(setAreProductsLoading(FAILED));
      }
    }
  };
}
