// import * as React from "react";
// import { connect } from "react-redux";
// import { Field, reduxForm, formValueSelector } from "redux-form";
// import { addTopping } from "../actions/pizzaGenerator"
//
// class PizzaToppings extends React.PureComponent {
//
//   //
//   // handleChange(event) {
//   //   this.setState({ value: event.target.checked });
//   // }
// toppingClick = (topping) => {
// console.log(this.props.topping)
// }
//
//
//
//
//   render() {
//
//     return (
//       <form onSubmit={this.handleSubmit}>
//         {this.props.pizzaToppings.map(topping => {
//           return (
//             <div className="baseSizeBTNContainer">
//               <label htmlFor="hasPineapple">
//                 {topping.name}{" "}
//                 {topping.price > 0 ? "( € " + topping.price + ")" : ""}
//               </label>
//               <div>
//                 <button
//                   name={topping.name}
//                   id={topping.name}
//                   key={topping.id}
//                   value={topping}
//                   component="input"
//                   type="button"
//                   className="toppingSizecheckbox"
//                   onChange={this.handleChange}
//                   onClick={this.toppingClick}>
//                   {topping.name}
//                 </button>
//               </div>{" "}
//               <br />
//             </div>
//           );
//         })}
//
//         {this.props.newTopping.map(topping => {
//           return (
//             <div className="baseSizeBTNContainer">
//               <label htmlFor="hasPineapple">
//                 {topping.name}{" "}
//                 {topping.price > 0 ? "( € " + topping.price + ")" : ""}
//               </label>
//               <div>
//                 <button
//                   name={topping.name}
//                   id={topping.name}
//                   key={topping.id}
//                   value={JSON.stringify(topping)}
//                   component="input"
//                   type="button"
//                   className="toppingSizecheckbox"
//                   onChange={this.handleChange}
//                   onClick={this.toppingClick}>
//                   {topping.name}
//                 </button>
//               </div>{" "}
//               <br />
//             </div>
//           );
//         })}
//
//
//
//         <br />
//         <hr />
//       </form>
//     );
//   }
// }
// const mapStateToProps = function(state) {
//   return {
//     pizzaToppings: state.pizzaToppings,
//        newTopping: state.addToppings
//   };
// };
// PizzaToppings = reduxForm({
//   form: "selectingFormValues" // a unique identifier for this form
// })(PizzaToppings);
//
// export default connect(mapStateToProps, {
//   Field,
//   reduxForm,
//   formValueSelector, addTopping
// })(PizzaToppings);
