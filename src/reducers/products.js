import { UPDATE_PRODUCTS } from '../actions/productsActions';

export const INITIAL_STATE = [];

export default function products(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case UPDATE_PRODUCTS: {
      return action.payload.products;
    }
    default:
      return state;
  }
}
