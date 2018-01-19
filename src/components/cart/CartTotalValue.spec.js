import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import ConnectedCartTotalValue, {
  CartTotalValue,
  mapStateToProps,
} from './CartTotalValue';

import CART from '../../mocks/Cart';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<CartTotalValue />', () => {
  let component;
  let wrapper;

  beforeEach(() => {
    component = (<CartTotalValue total={123.3}/>);
    wrapper = shallow(component);
  });

  it('should render correctly', () => {
    const cartTotalValue = renderer.create(component).toJSON();
    expect(cartTotalValue).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should calculate total price of all items in cart', () => {
      expect(mapStateToProps({ cart: CART }).total).toEqual(40);
    });
  });

  it('should inject correct total price', () => {
    const store = mockStore({ cart: CART });
    wrapper = shallow(<ConnectedCartTotalValue store={store} />);
    // expect(wrapper.props().productsInCart).toHaveLength(2);
  });
});
