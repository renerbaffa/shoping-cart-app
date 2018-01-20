import cart, { INITIAL_STATE } from './cart';

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

import CART from '../mocks/Cart';
import PRODUCTS from '../mocks/Products';

const ADD_ACTION = {
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
    expect(cart(CART, ADD_ACTION)).toEqual({
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

  describe('removing item from cart', () => {
    let action;
    let product;

    it('should updateState with product with new quantity', () => {
      product = {
        ...CART.content[CART.ids[1]],
        quantity: CART.content[CART.ids[1]].quantity - 1,
      }

      action = {
        type: REMOVE_FROM_CART,
        payload: {
          id: product.productID,
          data: product,
        },
      };

      expect(
        cart(CART, action).content[product.productID].quantity,
      ).toBe(product.quantity);
    });

    describe('when product to be removed has quantity 0', () => {
      let id;
      let newState;

      beforeEach(() => {
        product = {
          ...CART.content[CART.ids[1]],
          quantity: 0,
        }
        id = product.productID;
  
        action = {
          type: REMOVE_FROM_CART,
          payload: {
            id,
            data: product,
          },
        };

        newState = cart(CART, action);
      });

      it('should remove item from store ids', () => {
        expect(newState.ids).not.toEqual(expect.arrayContaining([id]));
      });

      it('should remove item from store content', () => {
        expect(newState.content[id]).toBeUndefined();
      });
    });
  });
});
