import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ProductItem } from './ProductItem';

describe('<ProductItem />', () => {
  let wrapper;
  let component;

  beforeEach(() => {
    component = (
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
    );
    wrapper = shallow(component);
  });

  it('should render correctly', () => {
    const productItem = renderer.create(component).toJSON();
    expect(productItem).toMatchSnapshot();
  });

  it('should display add button when product is in stock', () => {
    expect(wrapper.find('.ProductItem-button')).toHaveLength(1);
  });
  
  it('should not display add button when the product is not in stock', () => {
    wrapper.setProps({ unitsInStock: 0 });
    expect(wrapper.find('.ProductItem-button')).toHaveLength(0);
  });

  it('should reach 100% of coverage', () => {
    ProductItem.defaultProps.onAddProduct();
  });
});
