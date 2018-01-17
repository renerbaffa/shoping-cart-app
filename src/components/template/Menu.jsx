import React from 'react';

import MenuItem from './MenuItem';

import './Menu.css';

const Menu = () => (
  <div className="Menu-container">
    <div className="limited-width">
      <MenuItem label="Home" />
      <MenuItem label="Top-5 Products" />
      <MenuItem label="Your Cart" />
    </div>
  </div>
);

export default Menu;
