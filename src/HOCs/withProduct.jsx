import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function withProduct(WrappedComponent) {
  const WithProduct = ({ product, ...other }) => {
    const {
      description,
      image,
      name,
      unitPrice,
      unitsInStock,
    } = product;

    return (
      <WrappedComponent
        description={description}
        image={image}
        name={name}
        unitPrice={unitPrice}
        unitsInStock={unitsInStock}
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
  }

  WithProduct.defaultProps = {
    product: {}
  }

  return connect(
    ({ products }, { productId }) =>
      ({ product: products.content[productId] }),
  )(WithProduct);
}

export default withProduct;
