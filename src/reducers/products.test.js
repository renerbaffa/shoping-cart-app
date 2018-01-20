import { UPDATE_PRODUCTS } from '../actions/productsActions';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
import convertToIdsAndContent from '../normalizers/productsNormalize';

import products, {
  addItemtoStock,
  INITIAL_STATE,
  removeItemFromStock,
} from './products';

import PRODUCTS from '../mocks/Products';

const NORMALIZED_PRODUCTS = convertToIdsAndContent(PRODUCTS);

describe('prodcts reducer', () => {
  describe('given UPDATE_PRODUCTS action', () => {
    const UPDATE_PRODUCTS_ACTION = {
      type: UPDATE_PRODUCTS,
      payload: {
        products: NORMALIZED_PRODUCTS,
      },
    };

    it('should set empty array as default state', () => {
      expect(products()).toEqual(INITIAL_STATE);
    });
  
    it('should add products on state', () => {
      expect(products([], UPDATE_PRODUCTS_ACTION)).toEqual(NORMALIZED_PRODUCTS);
    });
  });

  describe('removeItemFromStock', () => {
    it('should remove item from stock', () => {
      expect(
        removeItemFromStock(
          NORMALIZED_PRODUCTS,
          {
            id: PRODUCTS[1].productID,
            data: PRODUCTS[1],
          },
        ).content[PRODUCTS[1].productID].unitsInStock,
      ).toBe(PRODUCTS[1].unitsInStock - 1);
    });

    it('should not remove item from stock when its quantity is 0', () => {
      expect(
        removeItemFromStock(
          NORMALIZED_PRODUCTS,
          {
            id: PRODUCTS[0].productID,
            data: PRODUCTS[0],
          },
        ).content[PRODUCTS[0].productID].unitsInStock,
      ).toBe(0);
    });
  });

  describe('given ADD_TO_CART action', () => {
    const ADD_TO_CART_ACTION = {
      type: ADD_TO_CART,
      payload: {
        id: PRODUCTS[1].productID,
        data: PRODUCTS[1],
      },
    };

    it('should update quantity of products in stock', () => {
      expect(
        products(
          NORMALIZED_PRODUCTS,
          ADD_TO_CART_ACTION,
        ).content[PRODUCTS[1].productID].unitsInStock,
      ).toBe(PRODUCTS[1].unitsInStock - 1);
    });
  });

  describe('addItemtoStock', () => {
    let product;
    let id;

    beforeEach(() => {
      product = {
        ...PRODUCTS[1],
        quantity: 4,
      };
      id = product.productID;
    });

    it('should add back product in stock', () => {
      expect(
        addItemtoStock(
          NORMALIZED_PRODUCTS,
          {
            id,
            data: product,
          },
        ).content[id].unitsInStock
      ).toBe(product.unitsInStock + 1);
    });

    describe('when new value is graten than quantity + current unitsInStock', () => {
      it('should add back the item in stock', () => {
        product.quantity = 0;

        expect(
          addItemtoStock(
            NORMALIZED_PRODUCTS,
            {
              id,
              data: product,
            },
          ).content[id].unitsInStock
        ).toBe(product.unitsInStock);
      });
    });
  });

  describe('given REMOVE_FROM_CART', () => {
    const REMOVE_FROM_CART_ACTION = {
      type: REMOVE_FROM_CART,
      payload: {
        id: PRODUCTS[1].productID,
        data: PRODUCTS[1],
      },
    };

    it('should update quantity of products in stock', () => {
      expect(
        products(
          NORMALIZED_PRODUCTS,
          REMOVE_FROM_CART_ACTION,
        ).content[PRODUCTS[1].productID].unitsInStock,
      ).toBe(PRODUCTS[1].unitsInStock + 1);
    });
  });
});
