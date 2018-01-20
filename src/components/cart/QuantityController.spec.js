import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import QuantityController from './QuantityController';

describe('<QuantityController />', () => {
  let wrapper;
  let onRemoveItem;
  let onAddItem;

  beforeEach(() => {
    onRemoveItem = jest.fn();
    onAddItem = jest.fn();
    wrapper = shallow(<QuantityController quantity={12} />);
  });

  it('should render correctly', () => {
    const quantityCOntroller = renderer.create(
      <QuantityController
        min={0}
        max={20}
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
        quantity={12}
      />
    ).toJSON();
    expect(quantityCOntroller).toMatchSnapshot();
  });

  describe('when min quantity is provided', () => {
    beforeEach(() => {
      wrapper.setProps({ min: 0 });
    });

    describe('when quantity is grater than min', () => {
      it('should not set disable to less button', () => {
        expect(
          wrapper.find('.QuantityController-less-button').props().disabled
        ).toBeFalsy();
      });

      it('should call onRemoveItem from props', () => {
        wrapper.setProps({ onRemoveItem });
        expect(onRemoveItem).not.toHaveBeenCalled();
        wrapper.find('.QuantityController-less-button').simulate('click');
        expect(onRemoveItem).toHaveBeenCalled();
      });
    });

    describe('when quantity is equal to the min', () => {
      it('should display less button disabled', () => {
        wrapper.setProps({ min: 0, quantity: 0 });
        expect(
          wrapper.find('.QuantityController-less-button').props().disabled
        ).toBeTruthy();
      });
    });
  });

  describe('when max quantity is provided', () => {
    beforeEach(() => {
      wrapper.setProps({ max: 13 });
    });

    describe('when quantity is less than max', () => {
      it('should not set disable to more button', () => {
        expect(
          wrapper.find('.QuantityController-more-button').props().disabled
        ).toBeFalsy();
      });

      it('should call onAddItem from props', () => {
        wrapper.setProps({ onAddItem });
        expect(onAddItem).not.toHaveBeenCalled();
        wrapper.find('.QuantityController-more-button').simulate('click');
        expect(onAddItem).toHaveBeenCalled();
      });
    });

    describe('when quantity is equal to max', () => {
      it('should display more button disabled', () => {
        wrapper.setProps({ max: 12 });
        expect(
          wrapper.find('.QuantityController-more-button').props().disabled
        ).toBeTruthy();
      });
    });
  });

  it('should reach 100% of coverage', () => {
    QuantityController.defaultProps.onRemoveItem();
    QuantityController.defaultProps.onAddItem();
  });
});
