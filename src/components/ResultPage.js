import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {PizzaBase} from "./PizzaBase"

class ResultPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    console.log(this.state)
    return (

      <div>

        You have bought this pizza!
        And it costed this much!
      </div>
    );
  }
}
export default reduxForm({
   form: 'PizzaBase',
   destroyOnUnmount: false
})(ResultPage)
