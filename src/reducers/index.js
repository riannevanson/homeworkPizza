import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pizzaBase from './pizzaBase'
import pizzaSauce from './pizzaSauce'
import pizzaToppings from './pizzaToppings'

export default combineReducers({
    form: formReducer,
 pizzaBase, pizzaSauce, pizzaToppings
})
