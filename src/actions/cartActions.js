export const ADD_TO_CART = 'ADD_TO_CART';

export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: {
      id: product.productID,
      data: product,
    }
  };
}

export function sumProductQuantity(product) {
  let quantity = 1;

  if (product.quantity) {
    quantity = product.quantity + 1;
  }

  return {
    ...product,
    quantity,
  };
}

export function addProductToCart(productId) {
  return (dispatch, getState) => {
    dispatch(
      addToCart(
        sumProductQuantity(
          getState().products.content[productId],
        ),
      ),
    );
  }
}
