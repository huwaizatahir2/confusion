import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import {useEffect} from 'react'

function Dishdetail(props){
    useEffect(() => {
        console.log("Dish detail component did mount"); 
     }, []);

    function renderDish(dish){
        if (dish != null){
            return (
                <Card>
                    <CardImg width="100%" object src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                        <CardText>
                            {dish.description}
                        </CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    };

    function renderComments(comments){
        console.log(comments);
        if (comments){

            const commentsList = comments.map( (comment) => {
                return (
                    <li key={comment.id}>
                        <div>
                            {comment.comment}
                        </div>
                        <div>
                            -- {comment.author} {comment.date}
                        </div>
                    </li>
                );
            });
            return commentsList
        }
        else {
            return (
                <div></div>
            );
        }
    };

    return (
        <div className="row">
            <div className='col-12 col-md-5 m-1'>
                {renderDish(props.selectedDish)}
            </div>
            <div className='col-12 col-md-5 m-1'>
                <h4>
                    Comments 
                </h4>
                <ul className="list-unstyled">
                    {renderComments(props.selectedDish.comments)}
                </ul>
            </div>
        </div>
    );
}

export default Dishdetail;