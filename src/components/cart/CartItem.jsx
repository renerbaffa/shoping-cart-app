import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import withProduct from '../../HOCs/withProduct';

import Image from '../shared/Image';

import './CartItem.css';

export const CartItem = ({
  className,
  description,
  image,
  index,
  name,
  onAddProduct,
  quantity,
  unitPrice,
  unitsInStock,
  ...other
}) => (
  <div className={cx(
    className,
    'CartItem-container',
    { 'CartItem-container-odd' : index % 2 }
  )}>
    <Image
      className="CartItem-image"
      alt={name}
      src={image}
    />
    <div className="CartItem-name">{name}</div>
    <div className="CartItem-price">Price: <b>${unitPrice}</b></div>
    <div className="CartItem-quantity">Quantity: <b>{quantity}</b></div>
    <div className="CartItem-stock">
      <b style={{ paddingRight: 3 }}>{unitsInStock}</b> in stock
    </div>
    <div className="CartItem-total">
      <b>Total</b>
      <b>$ {quantity * unitPrice}</b>
    </div>
  </div>
);

CartItem.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  name: PropTypes.string,
  onAddProduct: PropTypes.func,
  quantity: PropTypes.number,
  unitPrice: PropTypes.number,
  unitsInStock: PropTypes.number,
}

CartItem.defaultProps = {
  className: '',
  description: '',
  image: '',
  index: 0,
  name: '',
  onAddProduct: () => {},
  quantity: 0,
  unitPrice: 0,
  unitsInStock: 0,
}

export default withProduct(CartItem);
