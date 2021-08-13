import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store=createStore(reducers,compose(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();