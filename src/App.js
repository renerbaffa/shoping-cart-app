import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

import Menu from './components/template/Menu';
import NotFound from './components/template/NotFound';
import ProductsContainer from './containers/ProductsContainer';

import './App.css';

const c = () => <div>My cart</div>;

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={ProductsContainer}/>
          <Route path="/my-cart" component={c}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
