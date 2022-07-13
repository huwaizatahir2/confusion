import { Navbar, NavbarBrand } from 'reactstrap'; 
import Menu from './MenuComponent';
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
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>  
      <Menu onClick={(dishId) => onDishSelect(dishId)} dishes={dishes} />
      {selectedDish&&<Dishdetail selectedDish={dishes.filter((dish) => dish.id === selectedDish)[0]}/>}
    </div>
  );
}

export default Main;
