import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import MainNav from './components/main-nav/main.nav.component';
import Home from './routers/home/home.component';
import Registration from './routers/auth/auth.component';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<MainNav />}>
          <Route index element={<Home />} />
          <Route path='auth' element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
