import { combineReducers } from 'redux';

import communication from './communication';
import products from './products';

const appReducer = combineReducers({
  communication,
  products,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
