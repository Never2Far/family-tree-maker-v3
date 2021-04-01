import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.css';
// import App from './App';
import thunk from 'redux-thunk';
import { Auth0Provider } from '@auth0/auth0-react';
import AuthContainer from './containers/AuthContainer'


  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancer(applyMiddleware(thunk))
  );

ReactDOM.render(
  <Auth0Provider
  domain="near-net.us.auth0.com"
    clientId="zCPYFkh1GuJm5Zmz1aRQvHUy5dMVrZVp"
    redirectUri={window.location.origin}
    audience="https://near-net.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
    >
  <Provider store={store}>
    <AuthContainer />
  </Provider>
  </Auth0Provider>
 ,
  document.getElementById('root')
);