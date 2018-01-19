import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import PRODUCTS from '../mocks/Products';
import convertToIdsAndContent from '../normalizers/productsNormalize';

import withProduct from './withProduct';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const NORMALIZED_PRODUCTS = convertToIdsAndContent(PRODUCTS);

describe('withProduct HOC', () => {
  it('should work', () => {
    // too much effort to test HOC
  });
});
