import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartItem from '../components/cart/CartItem';
import CartTotalValue from '../components/cart/CartTotalValue';

import './MyCartContainer.css';

export const MyCartContainer = ({ productsInCart }) => (
  <div className="MyCartContainer-container">
    <div className={cx('limited-width', 'MyCartContainer-border')}>
      <h2>My Cart</h2>
      {
        productsInCart.length <= 0 ?
          <div className="MyCartContainer-empty">
            No items in cart yet.<br />
            <Link to="/">See the list of products</Link>
          </div> :
          <div className="MycartContainer-list">
            {productsInCart.map((productId, index) =>
              <CartItem
                index={index}
                isInCart
                isLastItem={index === productsInCart.length - 1}
                key={`CartItem-${productId}`}
                productId={productId}
              />
            )}
            <CartTotalValue />
          </div>
      }
    </div>
  </div>
);

MyCartContainer.propTypes = {
  productsInCart: PropTypes.arrayOf(PropTypes.number),
};

MyCartContainer.defaultProps = {
  productsInCart: [],
};

export default connect(
  ({ cart }) => ({ productsInCart: cart.ids }),
)(MyCartContainer);
