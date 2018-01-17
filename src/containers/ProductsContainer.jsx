import React, { Component } from 'react';

import SearchForm from '../components/products/SearchForm';
import SwitchViewOptions from '../components/products/SwitchViewOptions';
import ProductsList from '../components/products/ProductsList';

import { GRID } from '../constants/ViewOptions';

import './ProductsContainer.css';

class ProductsContainer extends Component {
  state = {
    currentView: GRID,
  };

  handleSwitchView = newView => this.setState({ currentView: newView });

  render() {
    const { currentView } = this.state;

    return (
      <div className="ProductsContainer-container">
        <div className="limited-width">
          <div className="space-between">
            <SearchForm />
            <SwitchViewOptions
              currentView={currentView}
              onSwitchView={this.handleSwitchView}
            />
          </div>
          <div className="ProductsContainer-content">
            <ProductsList
              currentView={currentView}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsContainer;
