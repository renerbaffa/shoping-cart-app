import React, { Component } from 'react';

import Menu from './components/template/Menu';
import ProductsPage from './pages/ProductsPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <ProductsPage />
      </div>
    );
  }
}

export default App;
