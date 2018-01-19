import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './CartTotalValue.css';

export const CartTotalValue = ({ total }) => (
  <div className="CartTotalValue-line">
    <div className="CartTotalValue-container">
      <b>Total</b>
      <b>$ {total}</b>
    </div>
  </div>
);

CartTotalValue.propTypes = {
  total: PropTypes.number,
};

CartTotalValue.defaultProps = {
  total: 0,
};

export function mapStateToProps({ cart }) {
  const total = cart.ids.reduce(((accumulator, productId) => {
    const product = cart.content[productId];
    return (accumulator + (product.quantity * product.unitPrice));
  }), 0);

  return { total };
}

export default connect(
  mapStateToProps,
)(CartTotalValue);
