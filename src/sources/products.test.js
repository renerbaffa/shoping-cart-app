import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { fetchProducts, FETCH_PRODUCTS_URL } from './products';

const mock = new MockAdapter(axios);

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
  it('return the list of products', () => {
    mock.onGet(FETCH_PRODUCTS_URL)
      .reply(200, { products: PRODUCTS_MOCK });
    
    fetchProducts().then(data => {
      expect(data).toEqual(PRODUCTS_MOCK);
    });
  });
});
