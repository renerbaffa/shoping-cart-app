import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import CART from '../../mocks/Cart';

import Menu from './Menu';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Menu />', () => {
  it('should show spinner correctly', () => {
    const store = mockStore({
      cart: CART,
    });
    const menu = renderer.create(
      <Provider store={store}>
        <Router>
          <Menu />
        </Router>
      </Provider>
    ).toJSON();
    expect(menu).toMatchSnapshot();
  });
})