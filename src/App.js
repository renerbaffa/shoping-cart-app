import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Menu from './components/template/Menu';
import ProductsContainer from './containers/ProductsContainer';

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Menu />
      <ProductsContainer />
    </div>
  </Provider>
);

export default App;
