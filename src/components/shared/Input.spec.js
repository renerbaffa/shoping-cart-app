import React from 'react';
import renderer from 'react-test-renderer';

import Input from './Input';

it('renders correctly', () => {
  const tree = renderer
    .create(<Input className="className" value="value" placeholder="Search" value="Search" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
