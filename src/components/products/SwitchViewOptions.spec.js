import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import SwitchViewOptions from './SwitchViewOptions';
import Button from '../shared/Button';

import { GRID, LIST } from '../../constants/ViewOptions';

describe('<SwitchViewOptions />', () => {
  let wrapper;
  let onSwitchView;
  let defaultComponent;

  beforeEach(() => {
    onSwitchView = jest.fn();
    defaultComponent = (
      <SwitchViewOptions
        currentView={GRID}
        onSwitchView={onSwitchView}
        className="className"
      />
    );
    wrapper = shallow(defaultComponent);
  });

  it('should render correctly', () => {
    const switchViewOptions = renderer.create(defaultComponent).toJSON();
    expect(switchViewOptions).toMatchSnapshot();
  });

  it('should call onSwitchView prop with GRID as parameter when selecting it', () => {
    expect(onSwitchView).not.toHaveBeenCalled();
    wrapper.find(Button).at(0).simulate('click');
    expect(onSwitchView).toHaveBeenCalledWith(GRID);
  });

  it('should call onSwitchView prop with LIST as parameter when selecting it', () => {
    expect(onSwitchView).not.toHaveBeenCalled();
    wrapper.find(Button).at(1).simulate('click');
    expect(onSwitchView).toHaveBeenCalledWith(LIST);
  });

  it('should reach 100% of coverage', () => {
    SwitchViewOptions.defaultProps.onSwitchView();
  });
});
