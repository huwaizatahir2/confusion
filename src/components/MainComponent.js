import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { useState } from 'react'
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Routes, Route, Navigate } from 'react-router-dom';

function Main() {

  const [dishes] = useState(DISHES);
  const [promotions] = useState(PROMOTIONS);
  const [leaders] = useState(LEADERS);
  const [comments] = useState(COMMENTS);

  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home dish={dishes.filter( (dish) => dish.featured)[0]} 
              promotion={promotions.filter( (promo) => promo.featured)[0]}
              leader={leaders.filter( (leader) => leader.featured)[0]}
              />} 
          />
          <Route path='/menu' element={<Menu dishes={dishes} />} />
          <Route path='/contactus' element={<Contact/>} />
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
