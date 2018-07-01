export const ADD_TOPPING = 'ADD_TOPPING'


export function addTopping(topping) {
  return {
    type: ADD_TOPPING,
    payload: {
      topping
    }
  }
}
