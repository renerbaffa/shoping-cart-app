import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductCard from './ProductCard';
import ProductItem from './ProductItem';

import { GRID, LIST } from '../../constants/ViewOptions';

import './ProductsList.css';

export const ProductsList = ({ currentView, productIds }) => (
  <div>
    <div className="ProductsList-container">
      {productIds.map(productId =>
        currentView === GRID ?
          <ProductCard
            productId={productId}
            key={`product-${GRID}-${productId}`}
          /> :
          <ProductItem
            productId={productId}
            key={`product-${LIST}-${productId}`}
          />
      )}
    </div>
  </div>
);

ProductsList.propTypes = {
  currentView: PropTypes.oneOf([GRID, LIST]),
  productIds: PropTypes.arrayOf(PropTypes.number),
};

ProductsList.defaultProps = {
  currentView: GRID,
};

export default connect(
  ({ products }) => ({ productIds: products.ids }),
)(ProductsList);
