import products, { INITIAL_STATE } from './products';
import { UPDATE_PRODUCTS } from '../actions/productsActions';

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

const ACTION = {
  type: UPDATE_PRODUCTS,
  payload: {
    products: PRODUCTS_MOCK,
  },
};

describe('prodcts reducer', () => {
  it('should set empty array as default state', () => {
    expect(products()).toEqual(INITIAL_STATE);
  });

  it('should add products on state', () => {
    expect(products([], ACTION)).toEqual(PRODUCTS_MOCK);
  });
});
