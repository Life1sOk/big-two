import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store-redux/store';
import { CartOpenProvider } from './contexts/cart.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartOpenProvider>
          <App />
        </CartOpenProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

