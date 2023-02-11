import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
export default class Menu extends Component {
    state = {
        dishes : DISHES
    }
  render() {
    const menu = this.state.dishes.map(dish => {
        return <MenuItem key={dish.id} dish={dish} />
    })
    return (
      <div className='container'>
        <div className="row">
            {menu}
        </div>
      </div>
    )
  }
}
