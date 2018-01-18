import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Button from '../shared/Button';
import Image from '../shared/Image';

import './ProductCard.css';

const ProductCard = ({ className, description, image, name, onAddProduct, ...other }) => (
  <div className={cx('ProductCard-container', className)} {...other}>
    <Image
      className="ProductCard-image"
      alt={name}
      src={image}
    />
    <div className="ProductCard-name">{name}</div>
    <div className="ProductCard-description">{description}</div>
    <Button
      className="ProductCard-button"
      onClick={onAddProduct}
    >
      +
    </Button>
  </div>
);

ProductCard.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  onAddProduct: PropTypes.func,
};

ProductCard.defaultProps = {
  className: '',
  description: '',
  image: '',
  name: '',
  onAddProduct: () => {},
};

export default ProductCard;
