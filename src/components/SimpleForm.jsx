// import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
//
// class SimpleForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     return this.state.value
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//         {this.state.value}
//       </form>
//     );
//   }
// }
//
// // Decorate the form component
// SimpleForm = reduxForm({
//   form: 'simple' // a unique name for this form
// })(SimpleForm);
//
// export default SimpleForm;
