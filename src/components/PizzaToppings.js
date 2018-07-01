import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class PizzaToppings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: JSON.parse(event.target.value) });
  }

  render() {
    const { pristine, reset, submitting, toppingSizeValue } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.pizzaToppings.map(topping => {
          return (
            <div className="toppingSizeBTNContainer">
              <label htmlFor="hasSizeValue">I want {topping.name} {topping.price > 0 ? '( € '+topping.price+')':''}</label>
              <div>
                <Field
                  name="test"
                  key={topping.id}
                  id="toppingSize"
                  component="input"
                  type="radio"
                  value={JSON.stringify(topping)}
                  className="toppingSizecheckbox"
                  onChange={this.handleChange}
                  checked={this.state.value.id === topping.id}
                />
              </div>{" "}
              <br />
            </div>
          );
        })}

        You choose: {this.state.value.name} topping
      </form>

    );
  }
}
const mapStateToProps = function(state) {
  return {
    pizzaToppings: state.pizzaToppings
  };
};

PizzaToppings = reduxForm({
  form: "selectingFormValues" // a unique identifier for this form
})(PizzaToppings);

const selector = formValueSelector("PizzaToppings"); // <-- same as form name
PizzaToppings = connect(state => {
  const toppingSizeValue = selector(state, "toppingSize");

  return {
    toppingSizeValue
  };
})(PizzaToppings);

export default connect(mapStateToProps, {
  Field,
  reduxForm,
  formValueSelector
})(PizzaToppings);
