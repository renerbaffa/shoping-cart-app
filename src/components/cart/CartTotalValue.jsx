import React from 'react';
import PropTypes from 'prop-types';

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

export default CartTotalValue;
