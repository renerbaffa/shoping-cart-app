import React from 'react';

import SearchForm from '../components/products/SearchForm';

import './ProductsPage.css';

const ProductsPage = () => (
  <div className="ProductsPage-container">
    <div className="limited-width">
      <SearchForm />
    </div>
  </div>
);

export default ProductsPage;
