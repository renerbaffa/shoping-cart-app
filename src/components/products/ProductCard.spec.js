import React from 'react';
import renderer from 'react-test-renderer';

import ProductCard from './ProductCard';

describe('<ProductCard />', () => {
  it('should render correctly', () => {
    const productCard =
      renderer
        .create(
          <ProductCard
            className="className"
            description="Product name sample"
            image="http://lorempixel.com/400/200/technics/"
            name="Product name sample"
          />
        )
        .toJSON();
    expect(productCard).toMatchSnapshot();
  });

  it('should reach 100%', () => {
    ProductCard.defaultProps.onAddProduct();
  });
});
