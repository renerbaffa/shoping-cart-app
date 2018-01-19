import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './ProductBadge.css';

export const ProductBadge = ({ quantity }) => (
  <div className="ProductBadge-container">
    {quantity > 999 ? '99+' : quantity}
  </div>
);

ProductBadge.propTypes = {
  quantity: PropTypes.number,
};

ProductBadge.defaultProps = {
  quantity: 0,
};

export default connect(
  ({ cart }) => ({ quantity: 0 }),
)(ProductBadge);
