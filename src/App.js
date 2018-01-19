import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Menu from './components/template/Menu';
import NotFound from './components/template/NotFound';
import ProductsContainer from './containers/ProductsContainer';
import MyCartContainer from './containers/MyCartContainer';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={ProductsContainer}/>
          <Route path="/my-cart" component={MyCartContainer}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
