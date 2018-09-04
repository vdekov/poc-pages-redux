import React from 'react'
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import root_reducer from './reducers';
import App from './components/App';
import preloaded_data from './store/data';

import './styles.css';

const store = window.store = createStore(
   root_reducer,
   preloaded_data,
   applyMiddleware( thunk, createLogger() )
);

console.log( store.getState() );

const root = document.getElementById( 'root' );
render(
   <Provider store={ store }>
      <App />
   </Provider>,
   root
);