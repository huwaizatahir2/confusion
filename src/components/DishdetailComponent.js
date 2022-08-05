import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';


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
                            -- {comment.author}, {new Intl.DateTimeFormat('en-Us', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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
        <div className='container'>
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/menu'>Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className='col-12'>
                <h3>
                    {props.dish.name}
                </h3>
                <hr/>
            </div>
            <div className="row">
                <div className='col-12 col-md-5 m-1'>
                    {renderDish(props.dish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h4>
                        Comments 
                    </h4>
                    <ul className="list-unstyled">
                        {renderComments(props.comments)}
                    </ul>
                </div>
            </div> 
        </div>
    );
}

export default Dishdetail;