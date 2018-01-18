import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { ProductsContainer } from './ProductsContainer';

import { GRID, LIST } from '../constants/ViewOptions';

describe('<ProductsContainer />', () => {
  let defaultComponent;
  let onFetchProjects;
  let wrapper;

  beforeEach(() => {
    onFetchProjects = jest.fn();
    defaultComponent = (
      <ProductsContainer
        onFetchProjects={onFetchProjects}
      />
    );
    wrapper = shallow(defaultComponent);
  });

  it('should render correctly', () => {
    const switchViewOptions = renderer.create(defaultComponent).toJSON();
    expect(switchViewOptions).toMatchSnapshot();
  });

  it('should fetch projects when did mount', () => {
    onFetchProjects.mockReset();
    wrapper.instance().componentDidMount();
    expect(onFetchProjects).toHaveBeenCalled();
  });

  it('should update state with new view when handling change', () => {
    expect(wrapper.state().currentView).toBe(GRID);
    wrapper.instance().handleSwitchViewChange(LIST);
    expect(wrapper.state().currentView).toBe(LIST);
  });
});

