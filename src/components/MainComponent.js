import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { useState } from 'react'
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import { Routes, Route, Navigate } from 'react-router-dom';

function Main() {

  const [dishes] = useState(DISHES);
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/menu' element={<Menu dishes={dishes} />} /> 
          <Route
              path="*"
              element={<Navigate to="/home" replace />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default Main;
