import { UPDATE_PRODUCTS } from '../actions/productsActions';
import { ADD_TO_CART } from '../actions/cartActions';
import { update } from '../utils/reducer';

export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export function removeItemFromStock(state, { id, data }) {
  if (data.unitsInStock <= 0) {
    return state;
  }

  return update(
    state,
    {
      id,
      data: {
        ...data,
        'unitsInStock': data.unitsInStock - 1,
      },
    },
  );
}

export default function products(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case UPDATE_PRODUCTS:
      return action.payload.products;
    case ADD_TO_CART:
      return removeItemFromStock(state, action.payload);
    default:
      return state;
  }
}
