import React from 'react';
import renderer from 'react-test-renderer';

import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should show spinner correctly', () => {
    const notFound = renderer.create(<NotFound />).toJSON();
    expect(notFound).toMatchSnapshot();
  });
})