
import { connect } from "react-redux";
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PizzaSauce extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
      <form onSubmit={handleSubmit}>


          Choose your pizza base


          {this.props.sauces.map(sauce => {
            return (
              <div className="saucesBTNContainer">
                <label htmlFor="baseSizeLabel">I would like {sauce.name}</label>
                <div>
                  <Field
                    name={sauce.id}
                    key={sauce.id}
                    id="sauces"
                    component="input"
                    type="checkbox"
                    className="saucescheckbox"
                  />
                </div> <br />
              </div>

            );
          })}


        </form>
    </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    sauces: state.pizzaSauce,


  };
};

// Decorate the form component
PizzaSauce = reduxForm({
  form: 'contact' // a unique name for this form
})(PizzaSauce);

export default connect(mapStateToProps, {

})(PizzaSauce);
