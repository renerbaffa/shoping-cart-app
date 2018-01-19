import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './MyCartContainer.css';

export const MyCartContainer = ({ productsInCart }) => (
  <div className="MyCartContainer-container">
    <div className={cx('limited-width', 'MyCartContainer-border')}>
      <h2>My Cart</h2>
      {
        productsInCart <= 0 ?
          <div className="MyCartContainer-empty">
            No items in cart yet.<br />
            <Link to="/">See the list of products</Link>
          </div> :
          null
      }
    </div>
  </div>
);

MyCartContainer.propTypes = {
  productsInCart: PropTypes.number,
};

MyCartContainer.defaultProps = {
  productsInCart: 0,
};

export default connect(
  ({ cart }) => ({ productsInCart: cart.ids.length }),
)(MyCartContainer);
