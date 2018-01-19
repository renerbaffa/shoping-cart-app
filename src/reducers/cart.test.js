import cart, { INITIAL_STATE } from './cart';

import { ADD_TO_CART } from '../actions/cartActions';

import CART from '../mocks/Cart';
import PRODUCTS from '../mocks/Products';

const ACTION = {
  type: ADD_TO_CART,
  payload: {
    id: PRODUCTS[1].productID,
    data: {
      ...CART.content[PRODUCTS[1].productID],
      quantity: CART.content[PRODUCTS[1].productID].quantity + 1,
    },
  },
};

describe('cart reducer', () => {
  it('should return INITIAL_STATE', () => {
    expect(cart()).toEqual(INITIAL_STATE);
  });

  it('should update product from state', () => {
    expect(cart(CART, ACTION)).toEqual({
      ...CART,
      content: {
        ...CART.content,
        [PRODUCTS[1].productID]: {
          ...CART.content[PRODUCTS[1].productID],
          quantity: 5,
        }
      },
    });
  });
});
