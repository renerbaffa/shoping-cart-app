import React from 'react';
import renderer from 'react-test-renderer';

import { CartItem } from './CartItem';

describe('<CartItem />', () => {
  let component;

  beforeEach(() => {
    component = (
      <CartItem
        className="className"
        description="description"
        image="image"
        index={0}
        name="Product Name"
        onAddProduct={() => {}}
        quantity={3}
        unitPrice={3}
        unitPrice={29.30}
        unitsInStock={12}
      />
    );
  });

  it('should render correctly', () => {
    const cartItem = renderer.create(component).toJSON();
    expect(cartItem).toMatchSnapshot();
  });

  it('should reach 100% of coverage', () => {
    CartItem.defaultProps.onAddProduct();
    CartItem.defaultProps.onRemoveProduct();
  });
});
