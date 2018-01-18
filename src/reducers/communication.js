import { PRODUCTS_LOADING } from '../actions/productsActions';

export const INITIAL_STATE = {};

export default function communication(state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case PRODUCTS_LOADING:
      return {
        areProjectsLoading: action.meta.isLoading,
      };
    default:
      return state;
  }
}

