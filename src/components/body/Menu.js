import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetails from './DishDetails'
export default class Menu extends Component {
    state = {
        dishes : DISHES,
        selectedDish : null
    }

    onDishSelect = dish => {
      console.log(dish)
      this.setState({
        selectedDish: dish
      })
    }
  render() {
    const menu = this.state.dishes.map(dish => {
        return <MenuItem key={dish.id} dish={dish} onDishSelect= {() => this.onDishSelect(dish)}/>
    })

    let dishDetail = null;
    if(this.state.selectedDish != null){
      dishDetail = <DishDetails selectedDish = {this.state.selectedDish}/>
    }
    return (
      <div className='container'>
        <div className="row">
            <div className='col-sm-6'>
            {menu}
            </div>
            <div className='col-sm-6'>
            {dishDetail}
            </div>
        </div>
      </div>
    )
  }
}
