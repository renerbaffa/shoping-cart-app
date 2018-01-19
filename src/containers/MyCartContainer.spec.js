import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ConnectedMyCartContainer, {
  MyCartContainer
} from './MyCartContainer';

import CART from '../mocks/Cart';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<MyCartContainer />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MyCartContainer />);
  });

  it('should render empty cart message when cart is empty', () => {
    expect(wrapper.find('.MyCartContainer-empty')).toHaveLength(1);
  });
  
  it('should not render empty cart message when cart has products', () => {
    wrapper.setProps({ productsInCart: CART.ids });
    expect(wrapper.find('.MyCartContainer-empty')).toHaveLength(0);
  });

  it('should inject corret quantity of products', () => {
    const store = mockStore({ cart: CART });
    wrapper = shallow(<ConnectedMyCartContainer store={store} />);
    expect(wrapper.props().productsInCart).toHaveLength(2);
  });
});
