import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class PizzaToppings extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { };

    this.handleChange = this.handleChange.bind(this);
  }
  //
  // handleChange(event) {
  //   this.setState({ value: event.target.checked });
  // }

  handleChange(event) {
      const value = event.target.checked;
      const name = event.target.name;

      this.setState( {
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
            <div className="toppingSizeBTNContainer">
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

{console.log(Object.keys(this.state))}
<b>Toppings:</b>
  {Object.keys(this.state).map(topping => {
    if (this.state[topping])
      return(<div> {topping}</div>  );
  }

)}

        {/* name: "Pineapple",
        name: "Corn",
        name: "Olives(green)",
        name: "Red union",
        name: "Spinach",
        name: "Cherry tomatoes",
        name: "Chicken",
        <b>Prijs toppings: {this.state.Pineapple === true ? 'Pineapple' : 'geenpineapple'} </b>
        <b>Prijs toppings: {this.state.Corn === true ? 'Pineapple' : 'geenpineapple'} </b>
        <b>Prijs toppings: {this.state.Pineapple === true ? 'Pineapple' : 'geenpineapple'} </b>
        <b>Prijs toppings: {this.state.Pineapple === true ? 'Pineapple' : 'geenpineapple'} </b> */}
        {/* <b>Prijs toppings: {this.state.Pineapple === true ? 'Pineapple' : 'geenpineapple'} </b>
        <b>Prijs toppings: {this.state.Pineapple === true ? 'Pineapple' : 'geenpineapple'} </b> */}

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

// const selector = formValueSelector("PizzaToppings");
// PizzaToppings = connect(state => {
//   const hasPineapple = selector(this.state, "Pineapple");
//   return {hasPineapple}
// })(PizzaToppings);

export default connect(mapStateToProps, {
  Field,
  reduxForm,
  formValueSelector
})(PizzaToppings);
