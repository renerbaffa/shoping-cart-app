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

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const PRODUCTS_MOCK = [
  {
    description: 'description 1',
    image: 'http://lorempixel.com/400/200/technics/',
    name: 'Chef Anton Cajun Seasoning',
    productID: 4,
    unitPrice: 22,
    unitsInStock: 53,
  },
  {
    description: 'description 2',
    image: 'http://lorempixel.com/400/200/technics/',
    name: '"Guaraná Fantástica"',
    productID: 24,
    unitPrice: 4.5,
    unitsInStock: 20,
  },
];

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
      expect(updateProducts(PRODUCTS_MOCK).data.products)
        .toEqual(PRODUCTS_MOCK);
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
        .reply(200, { products: PRODUCTS_MOCK });
  
      return store.dispatch(fetchProducts()).then(() => {
        expect(store.getActions()[0]).toEqual(LOADING_ACTION);
      });
    });

    it('should dispatch product action RETRIEVED on fetch success', () => {
      const store = mockStore({});

      mock.onGet(FETCH_PRODUCTS_URL)
        .reply(200, { products: PRODUCTS_MOCK });
  
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
