export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

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
    const itemInCart = getState().cart.content[productId];

    dispatch(
      addToCart(
        sumProductQuantity(
          {
            ...getState().products.content[productId],
            quantity: itemInCart && itemInCart.quantity,
          }
        ),
      ),
    );
  }
}

export function decreaseProductQuantity(product) {
  let quantity = 0;

  if (product.quantity > 0) {
    quantity = product.quantity - 1;
  }

  return {
    ...product,
    quantity,
  };
}

export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: product.productID,
      data: product,
    }
  };
}

export function removeProductFromCart(productId) {
  return (dispatch, getState) => {
    const itemInCart = getState().cart.content[productId];

    dispatch(
      removeFromCart(
        decreaseProductQuantity(itemInCart),
      ),
    );
  }
}
