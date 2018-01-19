import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SearchForm from './SearchForm';

import Input from '../shared/Input';

describe('<SearchForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchForm />);
  });

  it('should render correctly', () => {
    const searchForm = renderer.create(<SearchForm />).toJSON();
    expect(searchForm).toMatchSnapshot();
  });

  it('should update state when text changes', () => {
    const newText = 'New text';
    expect(wrapper.state().searchText).toBe('');
    wrapper.find(Input).props().onChange({ target: { value: newText }});
    expect(wrapper.state().searchText).toBe(newText);
  });
});
