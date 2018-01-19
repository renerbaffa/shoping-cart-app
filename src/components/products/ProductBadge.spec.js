import React from 'react';
import renderer from 'react-test-renderer';

import { mapStateToProps, ProductBadge } from './ProductBadge';

import CART from '../../mocks/Cart';

describe('<ProductBadge />', () => {
  it('should render correctly', () => {
    const productBadge =
      renderer.create(<ProductBadge quantity={99} />).toJSON();
    expect(productBadge).toMatchSnapshot();
  });
  
  it('should render 99+ when quantity is grater than 999', () => {
    const productBadge =
    renderer.create(<ProductBadge quantity={9999} />).toJSON();
    expect(productBadge).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    expect(mapStateToProps({ cart: CART })).toEqual({ quantity: 5 });
  });
});
