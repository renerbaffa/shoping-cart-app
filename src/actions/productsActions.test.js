import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  PRODUCTS_LOADING,
  setAreProductsLoading,
  fetchProducts,
} from './productsActions';

import { FAILED, RETRIEVED, RETRIEVING } from '../constants/loadingStatus';

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
  
  describe('fetchProducts', () => {
    afterEach(() => {
      fetchMock.reset();
      fetchMock.restore();
    })
  
    it('should dispatch product action RETRIEVING at the first moment', () => {
      const store = mockStore({});
      LOADING_ACTION.meta.isLoading = RETRIEVING;
  
      store.dispatch(fetchProducts()).then(() => {
        expect(store.getActions()[0]).toEqual(LOADING_ACTION);
      });
    });

    it('should dispatch product action RETRIEVED on fetch success', () => {
      const store = mockStore({});
      LOADING_ACTION.meta.isLoading = RETRIEVED;
  
      store.dispatch(fetchProducts()).then(() => {
        expect(store.getActions()[store.getActions().length - 1])
          .toEqual(LOADING_ACTION);
      });
    });
  });
});
