import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CollectionProvider } from './contexts/collection.context';
import { CartOpenProvider } from './contexts/cart.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CollectionProvider>
          <CartOpenProvider>
            <App />
          </CartOpenProvider>
        </CollectionProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

