import { combineReducers } from 'redux'
import pizzaBase from './pizzaBase'
import pizzaSauce from './pizzaSauce'
import pizzaToppings from './pizzaToppings'

export default combineReducers({
 pizzaBase, pizzaSauce, pizzaToppings
})
