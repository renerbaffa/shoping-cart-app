import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ProductCard } from './ProductCard';

describe('<ProductCard />', () => {
  let wrapper;
  let component;

  beforeEach(() => {
    component = (
      <ProductCard
        className="className"
        description="Product name sample"
        image="http://lorempixel.com/400/200/technics/"
        name="Product name sample"
        onAddProduct={() => {}}
        unitPrice={29.5}
        unitsInStock={2}
      />
    );
    wrapper = shallow(component);
  });

  it('should render correctly', () => {
    const productCard = renderer.create(component).toJSON();
    expect(productCard).toMatchSnapshot();
  });

  it('should display add button when product is in stock', () => {
    expect(wrapper.find('.ProductCard-button')).toHaveLength(1);
  });
  
  it('should not display add button when the product is not in stock', () => {
    wrapper.setProps({ unitsInStock: 0 });
    expect(wrapper.find('.ProductCard-button')).toHaveLength(0);
  });

  it('should reach 100%', () => {
    ProductCard.defaultProps.onAddProduct();
  });
});
