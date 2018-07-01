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

        <b>You choose: {this.state.value.size} cm for &euro; {this.state.value.price}</b>
        <br /><hr />
      </form>

    );
  }
}
const mapStateToProps = function(state) {
  return {
    pizzaBase: state.pizzaBase,

  };
};

PizzaBase = reduxForm({
  form: "selectingFormValues" // a unique identifier for this form
})(PizzaBase);

export default connect(mapStateToProps, {
  Field,
  reduxForm,
  formValueSelector
})(PizzaBase);
