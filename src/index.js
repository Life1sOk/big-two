import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store-redux/store';
import { CollectionProvider } from './contexts/collection.context';
import { CartOpenProvider } from './contexts/cart.context';
// import { UserProvider } from './contexts/user.context';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
          <CollectionProvider>
            <CartOpenProvider>
              <App />
            </CartOpenProvider>
          </CollectionProvider>
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

