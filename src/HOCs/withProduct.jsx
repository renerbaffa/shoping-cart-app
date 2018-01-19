import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addProductToCart } from '../actions/cartActions';

function withProduct(WrappedComponent) {
  const WithProduct = ({ product, onAddProduct, ...other }) => {
    const handleAddProduct = () =>
      onAddProduct(product.productID);

    return (
      <WrappedComponent
        {...product}
        onAddProduct={handleAddProduct}
        {...other}
      />
    );
  };

  WithProduct.propTypes = {
    isInCart: PropTypes.bool,
    product: PropTypes.shape({
      description: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      unitPrice: PropTypes.number,
      unitsInStock: PropTypes.number,
    }),
    onAddProduct: PropTypes.func,
  }

  WithProduct.defaultProps = {
    isInCart: false,
    product: {},
    onAddProduct: () => {},
  }

  return connect(
    ({ products, cart }, { productId, isInCart }) => {
      let product = products.content[productId];

      if (isInCart) {
        product = cart.content[productId];
      }

      return { product };
    },
    {
      onAddProduct: addProductToCart,
    }
  )(WithProduct);
}

export default withProduct;
