import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addProductToCart } from '../actions/cartActions';

function withProduct(WrappedComponent) {
  const WithProduct = ({ product, onAddProduct, ...other }) => {
    const {
      description,
      image,
      name,
      unitPrice,
      unitsInStock,
    } = product;

    const handleAddProduct = () =>
      onAddProduct(product.productID);

    return (
      <WrappedComponent
        description={description}
        image={image}
        name={name}
        unitPrice={unitPrice}
        unitsInStock={unitsInStock}
        onAddProduct={handleAddProduct}
        {...other}
      />
    );
  };

  WithProduct.propTypes = {
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
    product: {},
    onAddProduct: () => {},
  }

  return connect(
    ({ products }, { productId }) =>
      ({ product: products.content[productId] }),
    {
      onAddProduct: addProductToCart,
    }
  )(WithProduct);
}

export default withProduct;
