import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import { useEffect } from 'react'

function Menu(props){

    useEffect(() => {
       console.log("Menu component did mount") 
    }, []);

    const menu = props.dishes.map( (dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => props.onClick(dish.id)}>  
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
        </div>
    );
}
export default Menu;