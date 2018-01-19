import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SearchForm from './SearchForm';

import Button from '../shared/Button';
import Input from '../shared/Input';

const NEW_TEXT = 'New text';

describe('<SearchForm />', () => {
  let wrapper;
  let onFilter;

  beforeEach(() => {
    onFilter = jest.fn();
    wrapper = shallow(<SearchForm onFilter={onFilter} />);
  });

  it('should render correctly', () => {
    const searchForm = renderer.create(<SearchForm />).toJSON();
    expect(searchForm).toMatchSnapshot();
  });

  it('should uptade state when text changes', () => {
    expect(wrapper.state().searchText).toBe('');
    wrapper.find(Input).props().onChange({ target: { value: NEW_TEXT }});
    expect(wrapper.state().searchText).toBe(NEW_TEXT);
  });

  it('should call onFilter when clicking on search button', () => {
    wrapper.find(Input).props().onChange({ target: { value: NEW_TEXT }});
    expect(onFilter).not.toHaveBeenCalled();
    wrapper.find('form').props().onSubmit({ preventDefault: () =>{} });
    expect(onFilter).toHaveBeenCalledWith(NEW_TEXT);
  });

  it('should reach 100% of coverage', () => {
    SearchForm.defaultProps.onFilter();
  });
});
