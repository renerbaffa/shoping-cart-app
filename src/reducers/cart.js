import { ADD_TO_CART } from '../actions/cartActions';

import { update } from '../utils/reducer';

export const INITIAL_STATE = {
  ids: [],
  content: {},
};

export default function cart(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case ADD_TO_CART:
      return update(state, action.payload);
    default:
      return state;
  }
}
