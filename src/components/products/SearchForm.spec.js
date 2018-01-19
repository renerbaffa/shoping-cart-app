import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SearchForm from './SearchForm';

import Input from '../shared/Input';

describe('<SearchForm />', () => {
  it('should render correctly', () => {
    const searchForm = renderer.create(<SearchForm />).toJSON();
    expect(searchForm).toMatchSnapshot();
  });

  it('should reach 100% of coverage', () => {
    SearchForm.defaultProps.onSearchTextChange();
  });
});
