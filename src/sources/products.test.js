import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { ERROR, fetchProducts, FETCH_PRODUCTS_URL } from './products';

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

describe('productsSource', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  it('should return the list of products without errors', () => {
    mock.onGet(FETCH_PRODUCTS_URL)
      .reply(200, { products: PRODUCTS_MOCK });
    
    return fetchProducts().then(data =>
      expect(data).toEqual({
        hasError: false,
        products: PRODUCTS_MOCK
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
