import React from 'react';
import cx from 'classnames';

import MenuItem from './MenuItem';

import './Menu.css';
import ProductBadge from '../products/ProductBadge';

const Menu = () => (
  <div className="Menu-container">
    <div className={cx('limited-width', 'gray-background', 'space-between', 'Menu-height')}>
      <MenuItem label="Home" />
      <MenuItem label="Top-5 Products" />
      <div>
        <MenuItem className="Menu-cart" label="Your Cart" />
        <ProductBadge quantity={99999} />
      </div>
    </div>
  </div>
);

export default Menu;
