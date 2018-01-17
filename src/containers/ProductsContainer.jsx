import React, { Component } from 'react';

import SearchForm from '../components/products/SearchForm';
import SwitchViewOptions from '../components/products/SwitchViewOptions';

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
          <SearchForm />
          <SwitchViewOptions
            currentView={currentView}
            onSwitchView={this.handleSwitchView}
          />
        </div>
      </div>
    );
  }
}

export default ProductsContainer;
