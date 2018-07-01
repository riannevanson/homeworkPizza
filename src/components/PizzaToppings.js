import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class PizzaToppings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }
  //
  // handleChange(event) {
  //   this.setState({ value: event.target.checked });
  // }

  handleChange(event) {
    const value = event.target.checked;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      pristine,
      reset,
      submitting,
      toppingSizeValue,
      hasPineapple,
      pineapple
    } = this.props;


    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.pizzaToppings.map(topping => {
          return (
            <div className="baseSizeBTNContainer">
              <label htmlFor="hasPineapple">
                {topping.name}{" "}
                {topping.price > 0 ? "( € " + topping.price + ")" : ""}
              </label>
              <div>
                <Field
                  name={topping.name}
                  id={topping.name}
                  key={topping.id}
                  value={JSON.stringify(topping)}
                  component="input"
                  type="checkbox"
                  className="toppingSizecheckbox"
                  onChange={this.handleChange}
                />
              </div>{" "}
              <br />
            </div>
          );
        })}

        <b>Your chosen toppings:</b>

        {Object.keys(this.state).map(topping => {
          if (this.state[topping]) {
            // Object.entries(this.props.pizzaToppings).forEach(
            //     ([key, value]) => value.name === topping? console.log(topping, value.price) :''
            // );

            return <div> {topping} </div>;
          }
        })} for &euro; 1.5



        <br />
        <hr />
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

export default connect(mapStateToProps, {
  Field,
  reduxForm,
  formValueSelector
})(PizzaToppings);
