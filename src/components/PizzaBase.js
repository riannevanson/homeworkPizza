import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";

class PizzaBase extends React.PureComponent {


  componentDidMount() {}

  render() {
    console.log(this.props);

 const { handleSubmit, pristine, reset, submitting } = this.props

 const validate = values => {
   const errors = {}
   if (!values.base.id) {
     errors.pizzaBase = console.log('Please fill in the size you want')
   } else if (values.base.id.length > 2) {
     errors.username = console.log('You can not choose more than two')
   }

   return errors
 }
 const renderField = props => (
   <div>
     <label>{props.placeholder}</label>
     <div>
       <input {...props}/>
       {props.touched && props.error && <span>{props.error}</span>}
     </div>
   </div>
 )
    return (
      <div>
        <form>


          Choose your pizza base

          {this.props.pizzaBase.map(base => {
            return (
              <div className="baseSizeBTNContainer">
                <label htmlFor="baseSizeLabel">I would like a Pizzabase of {base.size} cm</label>
                <div>
                  <Field
                    name={base.id}
                    id="baseSize"
                    component="input"
                    type="checkbox"
                    className="baseSizecheckbox"
                  />
                </div> <br />
              </div>
            );
          })}

               <div>
                 <button type="submit" disabled={pristine || submitting}>Submit</button>
                 <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
               </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    pizzaBase: state.pizzaBase,
    // form: state.form

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
