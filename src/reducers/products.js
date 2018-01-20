import { UPDATE_PRODUCTS } from '../actions/productsActions';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';
import { update } from '../utils/reducer';

export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export function updateItemInStock(state, product, unitsInStock) {
  return update(
    state,
    {
      id: product.productID,
      data: {
        ...product,
        'unitsInStock': unitsInStock,
      },
    },
  );
}

export function removeItemFromStock(state, { id, data }) {
  if (data.unitsInStock <= 0) {
    return state;
  }

  return updateItemInStock(state, data, data.unitsInStock - 1);
}

export function addItemtoStock(state, {id, data}) {
  if (data.quantity <= 0) {
    return state;
  }

  return updateItemInStock(state, data, data.unitsInStock + 1);
}

export default function products(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case UPDATE_PRODUCTS:
      return action.payload.products;
    case ADD_TO_CART:
      return removeItemFromStock(state, action.payload);
    case REMOVE_FROM_CART:
      return addItemtoStock(state, action.payload);
    default:
      return state;
  }
}
