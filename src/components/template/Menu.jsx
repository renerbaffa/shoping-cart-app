import React from 'react';
import cx from 'classnames';

import MenuItem from './MenuItem';

import './Menu.css';

const Menu = () => (
  <div className="Menu-container">
    <div className={cx('limited-width', 'gray-background')}>
      <MenuItem label="Home" />
      <MenuItem label="Top-5 Products" />
      <MenuItem label="Your Cart" />
    </div>
  </div>
);

export default Menu;
