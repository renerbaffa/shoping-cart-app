import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './MenuItem.css';

const MenuItem = ({ className, label }) => (
  <a className={cx('MenuItem-container', className)}>
    {label}
  </a>
);

MenuItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

MenuItem.defaultProps = {
  className: '',
  label: '',
};

export default MenuItem;
