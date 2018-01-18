import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { connect } from 'react-redux';

import Loader from '../components/template/Loader';
import SearchForm from '../components/products/SearchForm';
import SwitchViewOptions from '../components/products/SwitchViewOptions';
import ProductsList from '../components/products/ProductsList';

import { fetchProducts } from '../actions/productsActions';

import { GRID } from '../constants/ViewOptions';
import { RETRIEVING } from '../constants/loadingStatus';

import './ProductsContainer.css';

export class ProductsContainer extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    onFetchProducts: PropTypes.func.isRequired,
  };

  static defaultProps = {
    isLoading: false,
  };

  state = {
    currentView: GRID,
  };
  
  componentDidMount() {
    this.props.onFetchProducts();
  }

  handleSwitchView = newView => this.setState({ currentView: newView });

  render() {
    const { currentView } = this.state;
    const { isLoading } = this.props;

    return (
      <div className="ProductsContainer-container">
        <Loader show={isLoading} />
        <div className={cx('limited-width', 'ProductsContainer-border')}>
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

export default connect(
  ({ communication }) => ({
    isLoading:
      communication.areProjectsLoading &&
      communication.areProjectsLoading === RETRIEVING
  }),
  {
    onFetchProducts: fetchProducts,
  }
)(ProductsContainer);
