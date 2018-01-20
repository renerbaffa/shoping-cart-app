import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

import { remove, update } from '../utils/reducer';

export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export default function cart(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case ADD_TO_CART:
      return update(state, action.payload);
    case REMOVE_FROM_CART: {
      if (action.payload.data.quantity === 0) {
        return remove(state, action.payload);
      }

      return update(state, action.payload);
    }
    default:
      return state;
  }
}
