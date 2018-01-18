import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import convertToIdsAndContent from '../normalizers/productsNormalize';

import { ERROR, fetchProducts, FETCH_PRODUCTS_URL } from './products';

import PRODUCTS from '../mocks/Products';

describe('productsSource', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('should return the list of products without errors', () => {
    mock.onGet(FETCH_PRODUCTS_URL)
      .reply(200, { products: PRODUCTS });
    
    return fetchProducts().then(data =>
      expect(data).toEqual({
        hasError: false,
        products: convertToIdsAndContent(PRODUCTS),
      }),
    );
  });

  it('should return error when backend returns error', () => {
    mock.onGet(FETCH_PRODUCTS_URL)
      .reply(500, { error: 'error' });

    return fetchProducts().then(data => expect(ERROR));
  });

  it('should return empty array when backend does not return products', () => {
    mock.onGet(FETCH_PRODUCTS_URL)
      .reply(200, { other: 'other' });

    return fetchProducts().then(data =>
      expect(data).toEqual({
        hasError: false,
        products: [],
      }),
    );
  });
});
