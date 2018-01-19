import React from 'react';
import renderer from 'react-test-renderer';

import MenuItem from './MenuItem';

describe('<MenuItem />', () => {
  it('should show spinner correctly', () => {
    const menuItem = renderer.create(<MenuItem />).toJSON();
    expect(menuItem).toMatchSnapshot();
  });
})