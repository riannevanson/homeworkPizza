import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {PizzaBase} from "./PizzaBase"
import PizzaToppings from "./PizzaToppings"


class ResultPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    console.log(this.state)
    return (

      <div>
{/* <PizzaToppings/> */}
{/* <PizzaBase/ > */}
Your Price is: &euro; A Lot!
      </div>
    );
  }
}



export default reduxForm({
   form: 'PizzaBase',
   destroyOnUnmount: false
})(ResultPage)

const mapStateToProps = state => {
  return { addTopping: state.addTopping }
}
