import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  addProductToCart,
  removeProductFromCart,
} from '../actions/cartActions';

function withProduct(WrappedComponent) {
  const WithProduct = ({
    product,
    onAddProduct,
    onRemoveProduct,
    ...other,
  }) => {
    const handleAddProduct = () =>
      onAddProduct(product.productID);

    const handleRemoveProduct = () =>
      onRemoveProduct(product.productID);

    return (
      <WrappedComponent
        {...product}
        onAddProduct={handleAddProduct}
        onRemoveProduct={handleRemoveProduct}
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
    onRemoveProduct: PropTypes.func,
  }

  WithProduct.defaultProps = {
    isInCart: false,
    product: {},
    onAddProduct: () => {},
    onRemoveProduct: () => {},
  }

  return connect(
    ({ products, cart }, { productId, isInCart }) => {
      let product = products.content[productId];

      if (isInCart) {
        product.quantity = cart.content[productId].quantity;
      }

      return { product };
    },
    {
      onAddProduct: addProductToCart,
      onRemoveProduct: removeProductFromCart,
    }
  )(WithProduct);
}

export default withProduct;
