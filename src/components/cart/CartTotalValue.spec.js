import React from 'react';
import renderer from 'react-test-renderer';

import { CartTotalValue } from './CartTotalValue';

describe('<CartTotalValue />', () => {
  let component;

  beforeEach(() => {
    component = (<CartTotalValue total={123.3}/>);
  });

  it('should render correctly', () => {
    const cartTotalValue = renderer.create(component).toJSON();
    expect(cartTotalValue).toMatchSnapshot();
  });

  // it('should reach 100% of coverage', () => {
  //   CartTotalValue.defaultProps.onAddProduct();
  // });
});
