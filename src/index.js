import React from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import root_reducer from './reducers';
import App from './containers/App';

// Enable Redux DevTools browser extension (if available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
   root_reducer,
   composeEnhancers(
      applyMiddleware( thunk, createLogger() )
   )
);

const root = document.getElementById( 'root' );
render(
   <Provider store={ store }>
      <App />
   </Provider>,
   root
);
