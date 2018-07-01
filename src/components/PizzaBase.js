import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class PizzaBase extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    return this.state.value
    event.preventDefault();
  }


  render() {

    console.log(this.props.form.selectingFormValues);

    const { pristine, reset, submitting, baseSizeValue } = this.props;



    return (

      <form onSubmit={this.handleSubmit}>

        {this.props.pizzaBase.map(base => {
            return (
              <div className="baseSizeBTNContainer">
                <label htmlFor="hasSizeValue">
                  I want my pizza to be {base.size} cm
                </label>
                <div>
                  <Field
                    name={base.id}
                    key={base.id}
                    id="baseSize"
                    component="input"
                    type="checkbox"
                    className="baseSizecheckbox"
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <br />
              </div>
            );
          })}
        <input type="submit" value="Submit" />
        {this.state.value}
      </form>










      // <form>
      //   Choose your pizza base
      //   {this.props.pizzaBase.map(base => {
      //     return (
      //       <div className="baseSizeBTNContainer">
      //         <label htmlFor="hasSizeValue">
      //           I would like a Pizzabase of {base.size} cm
      //         </label>
      //         <div>
      //           <Field
      //             name={base.id}
      //             key={base.id}
      //             id="baseSize"
      //             component="input"
      //             type="checkbox"
      //             className="baseSizecheckbox"
      //           />
      //         </div>{" "}
      //         <br />
      //       </div>
      //     );
      //   })}
      //   <div>
      //     <button type="submit" disabled={pristine || submitting}>
      //       Submit
      //     </button>
      //     <button
      //       type="button"
      //       disabled={pristine || submitting}
      //       onClick={reset}
      //     >
      //       Verwijder de input
      //     </button>
      //   </div>
      // </form>
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
