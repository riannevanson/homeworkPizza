import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class PizzaBase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: JSON.parse(event.target.value) });
  }

  render() {
    const { pristine, reset, submitting, baseSizeValue } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.pizzaBase.map(base => {
          return (
            <div className="baseSizeBTNContainer">
              <label htmlFor="hasSizeValue">I want my {base.size} cm</label>
              <div>
                <Field
                  name="test"
                  key={base.id}
                  id="baseSize"
                  component="input"
                  type="radio"
                  value={JSON.stringify(base)}
                  className="baseSizecheckbox"
                  onChange={this.handleChange}
                  checked={this.state.value.id === base.id}
                />
              </div>{" "}
              <br />
            </div>
          );
        })}
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
        You choose: {this.state.value.size} cm
      </form>

    );
  }
}
const mapStateToProps = function(state) {
  return {
    pizzaBase: state.pizzaBase
  };
};

PizzaBase = reduxForm({
  form: "selectingFormValues" // a unique identifier for this form
})(PizzaBase);

const selector = formValueSelector("pizzaBase"); // <-- same as form name
PizzaBase = connect(state => {
  const baseSizeValue = selector(state, "baseSize");

  return {
    baseSizeValue
  };
})(PizzaBase);

export default connect(mapStateToProps, {
  Field,
  reduxForm,
  formValueSelector
})(PizzaBase);

// JSON.parse('{"id":4,"size":35,"style":"NY Style","price":13.49}')
