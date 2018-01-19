import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { GRID, LIST } from '../../constants/ViewOptions';

import ConnectedProductsList, { ProductsList } from './ProductsList';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('./ProductCard', () => 'ProductCard');
jest.mock('./ProductItem', () => 'ProductItem');

describe('<ProductsList />', () => {
  let productsList;

  it('should render correctly on GRID view', () => {
    productsList = renderer.create(
      <ProductsList
        currentView={GRID}
        productIds={[1, 2]}
      />
    ).toJSON();
    expect(productsList).toMatchSnapshot();
  });

  it('should render correctly on LIST view', () => {
    productsList = renderer.create(
      <ProductsList
        currentView={LIST}
        productIds={[1, 2]}
      />
    ).toJSON();
    expect(productsList).toMatchSnapshot();
  });

  it('should inject product id list', () => {
    const ids = [1, 2];
    const store = mockStore({
      products: { ids },
    });

    const wrapper = shallow(
      <ConnectedProductsList
        store={store}
        currentView={GRID}
      />
    );

    expect(wrapper.props().productIds).toEqual(ids);
  });
});