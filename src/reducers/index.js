import { combineReducers } from 'redux';

import cart from './cart';
import communication from './communication';
import products from './products';

const appReducer = combineReducers({
  cart,
  communication,
  products,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
