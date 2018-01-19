import React from 'react';
import renderer from 'react-test-renderer';

import { ProductItem } from './ProductItem';

describe('<ProductItem />', () => {
  it('should render correctly', () => {
    const productItem = renderer.create(
      <ProductItem
        className="className"
        description="description"
        image="image"
        index={0}
        name="Product Name"
        onAddProduct={() => {}}
        unitPrice={29.30}
        unitsInStock={12}
      />
    ).toJSON();
    expect(productItem).toMatchSnapshot();
  });

  it('should reach 100% of coverage', () => {
    ProductItem.defaultProps.onAddProduct();
  });
});
