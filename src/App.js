import React from 'react';
import { useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';

import MainNav from './components/main-nav/main.nav.component';
import Home from './routers/home/home.component';
import Auth from './routers/auth/auth.component';
import Checkout from './routers/checkout/checkout.component';
import Shop from './routers/shop/shop.component';
import { checkUserSession } from './store-redux/user/user.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
}, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainNav />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Auth />} />
          <Route path='shop/*' element={<Shop />}/>
          <Route path='check-out' element={<Checkout />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
