import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import history from './history';

function configureStore() {
  return createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  );
}

export default configureStore();
