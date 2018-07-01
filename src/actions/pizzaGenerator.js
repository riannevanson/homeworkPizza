export const ADD_TOPPING = 'ADD_TOPPING'


export function addTopping(name, price) {
  return {
    type: ADD_TOPPING,
    payload: {
      name,
      price
    }
  }
}
