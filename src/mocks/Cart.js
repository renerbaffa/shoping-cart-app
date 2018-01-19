import PRODUCTS from './Products';

const CART = {
  ids: [PRODUCTS[0].productID, PRODUCTS[1].productID],
  content: {
    [PRODUCTS[0].productID]: {
      ...PRODUCTS[0],
      quantity: 1,
    },
    [PRODUCTS[1].productID]: {
      ...PRODUCTS[1],
      quantity: 4,
    },
  }
};

export default CART;
