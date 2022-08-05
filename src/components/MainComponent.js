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
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Dishdetail from './DishdetailComponent';

function Main() {

  const [dishes] = useState(DISHES);
  const [promotions] = useState(PROMOTIONS);
  const [leaders] = useState(LEADERS);
  const [comments] = useState(COMMENTS);

  const DishWithId = () => {
    let params = useParams();

     return (
        <Dishdetail dish={dishes.filter((dish) => dish.id === parseInt(params.dishId, 10))[0]}
        comments={comments.filter((comment) => comment.dishId === parseInt(params.dishId, 10))}
        />
     );
  }
  
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/home" replace />} />
          <Route path='/home' element={<Home dish={dishes.filter( (dish) => dish.featured)[0]} 
              promotion={promotions.filter( (promo) => promo.featured)[0]}
              leader={leaders.filter( (leader) => leader.featured)[0]}
              />} 
          />
          <Route path='/menu' element={<Menu dishes={dishes} />} />
          <Route path='/menu/:dishId' element={<DishWithId/>} />
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
