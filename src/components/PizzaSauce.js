import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class PizzaSauce extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: JSON.parse(event.target.value) });
  }

  render() {
    const { pristine, reset, submitting, sauceSizeValue } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.pizzaSauce.map(sauce => {
          return (
            <div className="sauceSizeBTNContainer">
              <label htmlFor="hasSizeValue">I want {sauce.name} {sauce.price > 0 ? '( € '+sauce.price+')':''}</label>
              <div>
                <Field
                  name="test"
                  key={sauce.id}
                  id="sauceSize"
                  component="input"
                  type="radio"
                  value={JSON.stringify(sauce)}
                  className="sauceSizecheckbox"
                  onChange={this.handleChange}
                  checked={this.state.value.id === sauce.id}
                />
              </div>{" "}
              <br />
            </div>
          );
        })}

        You choose: {this.state.value.name} sauce
      </form>

    );
  }
}
const mapStateToProps = function(state) {
  return {
    pizzaSauce: state.pizzaSauce
  };
};

PizzaSauce = reduxForm({
  form: "selectingFormValues" // a unique identifier for this form
})(PizzaSauce);

const selector = formValueSelector("PizzaSauce"); // <-- same as form name
PizzaSauce = connect(state => {
  const sauceSizeValue = selector(state, "sauceSize");

  return {
    sauceSizeValue
  };
})(PizzaSauce);

export default connect(mapStateToProps, {
  Field,
  reduxForm,
  formValueSelector
})(PizzaSauce);

// JSON.parse('{"id":4,"size":35,"style":"NY Style","price":13.49}')
