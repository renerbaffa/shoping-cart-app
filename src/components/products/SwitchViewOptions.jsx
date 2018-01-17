import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/Button';

import { GRID, LIST } from '../../constants/ViewOptions';

import './SwitchViewOptions.css';

const SwitchViewOptions = ({ currentView, onSwitchView, ...other }) => (
  <div {...other}>
    <Button
      className="SwitchViewOptions-button"
      selected={currentView === GRID}
      onClick={() => onSwitchView(GRID)}
    >
      Grid
    </Button>
    <Button
      className="SwitchViewOptions-button"
      selected={currentView === LIST}
      onClick={() => onSwitchView(LIST)}
    >
      List
    </Button>
  </div>
);

SwitchViewOptions.propTypes = {
  currentView: PropTypes.oneOf([GRID, LIST]),
  onSwitchView: PropTypes.func,
};

SwitchViewOptions.defaultProps = {
  currentView: GRID,
  onSwitchView: () => {},
};

export default SwitchViewOptions;
