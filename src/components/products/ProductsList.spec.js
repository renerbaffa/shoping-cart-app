import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { GRID, LIST } from '../../constants/ViewOptions';

import ConnectedProductsList,
{ mapStateToProps, ProductsList } from './ProductsList';

import PROJECTS from '../../mocks/Products';
import convertToIdsAndContent from '../../normalizers/productsNormalize';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const NORMALIZED_PRODUCTS = convertToIdsAndContent(PROJECTS);
const FILTER = 'Fant';

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

  describe('mapStateToProps', () => {
    it('should return filtered product ids', () => {
      const filteredProject =
        mapStateToProps(
          { products: NORMALIZED_PRODUCTS },
          { filterText: FILTER }
        ).productIds;

      expect(filteredProject).toHaveLength(1);
      expect(filteredProject[0]).toBe(24);
    });
  });

  it('should inject filter product id list', () => {
    const ids = [24];
    const store = mockStore({
      products: NORMALIZED_PRODUCTS,
    });

    const wrapper = shallow(
      <ConnectedProductsList
        store={store}
        filterText={FILTER}
        currentView={GRID}
      />
    );

    expect(wrapper.props().productIds).toEqual(ids);
  });
});
