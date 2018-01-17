import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.css';

/*
  Button component is an adapter.
  Imagine that in the future we move to react-bootstrap or material-ui
  In this case we only need to replase default button by the library button
*/
const Button = ({ children, className, ...other }) => (
  <button {...other} className={cx(className, 'Button')}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: '',
};

export default Button;
