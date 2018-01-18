import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { FETCH_PRODUCTS_URL } from '../sources/products';

import {
  PRODUCTS_LOADING,
  setAreProductsLoading,
  fetchProducts,
  UPDATE_PRODUCTS,
  updateProducts,
} from './productsActions';

import { FAILED, RETRIEVED, RETRIEVING } from '../constants/loadingStatus';

import PRODUCTS from '../mocks/Products';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('productsAction', () => {
  const LOADING_ACTION = {
    type: PRODUCTS_LOADING,
    meta: {},
  }

  describe('setAreProductsLoading', () => {
    it('should return correct action when setting loading as FAILED', () => {
      LOADING_ACTION.meta.isLoading = FAILED;
      expect(setAreProductsLoading(FAILED)).toEqual(LOADING_ACTION);
    });
  
    it('should return correct action when setting loading as RETRIEVED', () => {
      LOADING_ACTION.meta.isLoading = RETRIEVED;
      expect(setAreProductsLoading(RETRIEVED)).toEqual(LOADING_ACTION);
    });
    
    it('should return correct action when setting loading as FAILED', () => {
      LOADING_ACTION.meta.isLoading = FAILED;
      expect(setAreProductsLoading(FAILED)).toEqual(LOADING_ACTION);
    });
  });

  describe('updateProducts', () => {
    it('should set meta information isLoading as RETRIEVED', () => {
      const productsAction = updateProducts([]);
      expect(productsAction.type).toEqual(UPDATE_PRODUCTS);
      expect(productsAction.meta).toEqual({
        isLoading: RETRIEVED,
      });
    });

    it('should return products as payload data', () => {
      expect(updateProducts(PRODUCTS).payload.products)
        .toEqual(PRODUCTS);
    });
  });
  
  describe('fetchProducts', () => {
    let mock;

    beforeEach(() => {
      mock = new MockAdapter(axios);
    });

    it('should dispatch product action RETRIEVING at the first moment', () => {
      const store = mockStore({});
      LOADING_ACTION.meta.isLoading = RETRIEVING;

      mock.onGet(FETCH_PRODUCTS_URL)
        .reply(200, { products: PRODUCTS });
  
      return store.dispatch(fetchProducts()).then(() => {
        expect(store.getActions()[0]).toEqual(LOADING_ACTION);
      });
    });

    it('should dispatch product action RETRIEVED on fetch success', () => {
      const store = mockStore({});

      mock.onGet(FETCH_PRODUCTS_URL)
        .reply(200, { products: PRODUCTS });
  
      return store.dispatch(fetchProducts()).then(() => {
        expect(store.getActions()[store.getActions().length - 1].meta.isLoading)
          .toEqual(RETRIEVED);
      });
    });

    it('should dispatch product action FAILED when backend returns error', () => {
      const store = mockStore({});
      LOADING_ACTION.meta.isLoading = FAILED;

      mock.onGet(FETCH_PRODUCTS_URL).reply(404);
  
      return store.dispatch(fetchProducts()).then(() => {
        expect(store.getActions()[store.getActions().length - 1])
          .toEqual(LOADING_ACTION);
      });
    });
  });
});
