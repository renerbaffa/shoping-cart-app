import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import withProduct from '../../HOCs/withProduct';

import QuantityController from '../cart/QuantityController';

import Image from '../shared/Image';

import './CartItem.css';

export const CartItem = ({
  className,
  description,
  image,
  index,
  isLastItem,
  name,
  onAddProduct,
  onRemoveProduct,
  quantity,
  unitPrice,
  unitsInStock,
  ...other
}) => (
  <div className={cx(
    className,
    'CartItem-container',
    {
      'CartItem-container-odd' : index % 2,
      'CartItem-container-last-item' : isLastItem,
    }
  )}>
    <Image
      className="CartItem-image"
      alt={name}
      src={image}
    />
    <div className="CartItem-name">{name}</div>
    <div className="CartItem-price">Price: <b>${unitPrice}</b></div>
    <div className="CartItem-quantity">
      <QuantityController
        min={0}
        max={quantity + unitsInStock}
        quantity={quantity}
        onAddItem={onAddProduct}
        onRemoveItem={onRemoveProduct}
      />
    </div>
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
  isLastItem: PropTypes.bool,
  name: PropTypes.string,
  onAddProduct: PropTypes.func,
  onRemoveProduct: PropTypes.func,
  quantity: PropTypes.number,
  unitPrice: PropTypes.number,
  unitsInStock: PropTypes.number,
}

CartItem.defaultProps = {
  className: '',
  description: '',
  image: '',
  index: 0,
  isLastItem: false,
  name: '',
  onAddProduct: () => {},
  onRemoveProduct: () => {},
  quantity: 0,
  unitPrice: 0,
  unitsInStock: 0,
}

export default withProduct(CartItem);
