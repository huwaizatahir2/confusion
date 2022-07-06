import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import { useState, useEffect } from 'react'
import Dishdetail from './DishdetailComponent';

function Menu(props){

    const [selectedDish, setSelectedDish] = useState(null);

    function onDishSelect(dish){
        setSelectedDish(dish);
    };
    useEffect(() => {
       console.log("Menu component did mount") 
    }, []);

    const menu = props.dishes.map( (dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => onDishSelect(dish)}>  
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>                
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            {selectedDish&&<Dishdetail selectedDish={selectedDish} />}
        </div>
    );
}
export default Menu;