import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import MainNav from './components/main-nav/main.nav.component';
import Home from './routers/home/home.component';
import Auth from './routers/auth/auth.component';
import Checkout from './routers/checkout/checkout.component';

import Shop from './routers/shop/shop.component';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainNav />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Auth />} />
          <Route path='shop' element={<Shop />}/>
          <Route path='check-out' element={<Checkout />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
