import { pizzaToppings } from "../lib/pizzaElements";
import {ADD_TOPPING} from '../actions/pizzaGenerator'

export default function (state = [], action) {
  switch (action.type) {
    case ADD_TOPPING:
  return [
    ...state,
    action.payload
  ]
    default:
      return state
  }
}
