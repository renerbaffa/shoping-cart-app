import { combineReducers } from 'redux';

import products from './products';

const appReducer = combineReducers({
  products,
});

export default function (state, action = {}) {
  return appReducer(state, action);
}
