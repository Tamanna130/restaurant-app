import React from 'react'
import { Card, CardBody, CardImg, CardImgOverlay,CardTitle} from 'reactstrap'
export default function MenuItem(props) {
  return (
    
            <div >
              <Card style = {{margin:'10px'}}>
                <CardBody>
                  <CardImg width='100%' alt={props.dish.name} src= {props.dish.image}/>
                  <CardImgOverlay>
                    <CardTitle onClick={props.onDishSelect} style={{cursor: 'pointer'}}>
                      {props.dish.name}
                      </CardTitle>
                  </CardImgOverlay>
                </CardBody>
              </Card>
            </div>
        
   
  )
}
