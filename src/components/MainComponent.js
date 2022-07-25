import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { useState } from 'react'
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

function Main() {

  const [dishes] = useState(DISHES);
  const [selectedDish, setSelectedDish] = useState(null);

  function onDishSelect(dishId){
    setSelectedDish(dishId);
};

  return (
    <div>
      <Header/>
      <Menu onClick={(dishId) => onDishSelect(dishId)} dishes={dishes} />
      {selectedDish&&<Dishdetail selectedDish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>}
      <Footer />
    </div>
  );
}

export default Main;
