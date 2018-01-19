import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ProductCard from './ProductCard';
import ProductItem from './ProductItem';

import { GRID, LIST } from '../../constants/ViewOptions';

import { filterByText } from '../../utils/functions';

import './ProductsList.css';

export const ProductsList = ({ currentView, productIds }) => (
  <div>
    <div className="ProductsList-container">
      {productIds.map((productId, index) =>
        currentView === GRID ?
          <ProductCard
            key={`product-${GRID}-${productId}`}
            productId={productId}
          /> :
          <ProductItem
            index={index}
            key={`product-${LIST}-${productId}`}
            productId={productId}
          />
      )}
    </div>
  </div>
);

ProductsList.propTypes = {
  currentView: PropTypes.oneOf([GRID, LIST]),
  filterText: PropTypes.string,
  productIds: PropTypes.arrayOf(PropTypes.number),
};

ProductsList.defaultProps = {
  currentView: GRID,
  filterText: '',
};

export function mapStateToProps({ products }, { filterText }) {
  const filteredProducts = filterByText(products, filterText);

  return ({ productIds: filteredProducts.ids });
}

export default connect(
  mapStateToProps,
)(ProductsList);
