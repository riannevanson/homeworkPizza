
import { connect } from "react-redux";
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PizzaSauce extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
      {/* <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" type="text"/>
        </div>
        <div>
          <label>Last Name</label>
          <Field name="lastName" component="input" type="text"/>
        </div>
        <div>
          <label>Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
    );
  }
}

// Decorate the form component
PizzaSauce = reduxForm({
  form: 'contact' // a unique name for this form
})(PizzaSauce);

export default PizzaSauce;

// class PizzaSauce extends React.PureComponent {
//   componentDidMount() {}
//
//   render() {
//     return (
//       <div>
//         Sauces
//       </div>
//     );
//   }
// }
// const mapStateToProps = state => {
//   return { state };
// };
// export default connect(mapStateToProps,{})(PizzaSauce);
