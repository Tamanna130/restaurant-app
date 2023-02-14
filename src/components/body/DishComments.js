import React from 'react'
export default function DishComments(props) {
    console.log(props.comment.id)
  return (
    <div>
        <p>{props.comment.comment}</p>
    </div>
  )
}
