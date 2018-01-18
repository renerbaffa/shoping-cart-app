import { UPDATE_PRODUCTS } from '../actions/productsActions';
import convertToIdsAndContent from '../normalizers/productsNormalize';

import products, { INITIAL_STATE } from './products';

import PRODUCTS from '../mocks/Products';

const NORMALIZED_PRODUCTS = convertToIdsAndContent(PRODUCTS);
const ACTION = {
  type: UPDATE_PRODUCTS,
  payload: {
    products: NORMALIZED_PRODUCTS,
  },
};

describe('prodcts reducer', () => {
  it('should set empty array as default state', () => {
    expect(products()).toEqual(INITIAL_STATE);
  });

  it('should add products on state', () => {
    expect(products([], ACTION)).toEqual(NORMALIZED_PRODUCTS);
  });
});
