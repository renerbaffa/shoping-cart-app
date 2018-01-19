import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';

import MenuItem from './MenuItem';

import './Menu.css';
import ProductBadge from '../products/ProductBadge';

const styles = {
  link: {
    color: 'lightgray',
    textDecoration: 'none',
  },
};

const Menu = () => (
  <div className="Menu-container">
    <div className={cx('limited-width', 'gray-background', 'space-between', 'Menu-height')}>
      <Link to="/" style={styles.link}>
        <MenuItem label="Home" />
      </Link>
      <MenuItem label="Top-5 Products" />
      <Link to="my-cart" style={styles.link}>
        <div>
          <MenuItem className="Menu-cart" label="Your Cart" />
          <ProductBadge quantity={99999} />
        </div>
      </Link>
    </div>
  </div>
);

export default Menu;
