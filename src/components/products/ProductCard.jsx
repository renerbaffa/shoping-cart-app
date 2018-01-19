import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import withProduct from '../../HOCs/withProduct';

import Button from '../shared/Button';
import Image from '../shared/Image';

import './ProductCard.css';

export const ProductCard = ({
  className,
  description,
  image,
  name,
  onAddProduct,
  unitPrice,
  unitsInStock,
  ...other
}) => (
  <div className={cx('ProductCard-container', className)}>
    <Image
      className="ProductCard-image"
      alt={name}
      src={image}
    />
    <div className="ProductCard-name">{name}</div>
    <div className="ProductCard-description">{description}</div>
    <div className="ProductCard-price">Price: <b>${unitPrice}</b></div>
    <div className="ProductCard-stock"><b>{unitsInStock}</b> in stock</div>
    <div className="ProductCard-bottom">
      {
        unitsInStock > 0 ?
          <Button
            className="ProductCard-button"
            onClick={onAddProduct}
          >
            +
          </Button> :
          null
      }
    </div>
  </div>
);

ProductCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  onAddProduct: PropTypes.func,
  unitPrice: PropTypes.number,
  unitsInStock: PropTypes.number,
};

ProductCard.defaultProps = {
  className: '',
  description: '',
  image: '',
  name: '',
  onAddProduct: () => {},
  unitPrice: 0,
  unitsInStock: 0,
};

export default withProduct(ProductCard);
