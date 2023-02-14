import React from 'react'
import { Card, CardBody,CardText, CardImg, CardImgOverlay,CardTitle} from 'reactstrap'
import DishComments from './DishComments'
export default function DishDetails(props) {
  let disComment = null;

  if(props.selectedDish.comments !== undefined){
    disComment = props.selectedDish.comments;
    disComment =  disComment.map((comment)=>{return(
        <DishComments key={comment.id} comment={comment}/>
    )})

    
  }
  
  return (
    <div>
        <Card style={{margin:'10px'}}>
            <CardImg top src = {props.selectedDish.image} alt= {props.selectedDish.name}/>
            <CardBody style={{textAlign: 'left'}}>
            <CardTitle>{props.selectedDish.name}</CardTitle>
            <CardText>
                <p>{props.selectedDish.price}</p>
                <p>{props.selectedDish.description}</p>
                <p><b>Comments:</b></p>
                {disComment}
            </CardText>
            </CardBody>
        </Card>
    </div>
  )
}
