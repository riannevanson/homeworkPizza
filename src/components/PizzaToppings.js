import * as React from "react";
import { connect } from "react-redux";
import AddToppingForm from './AddToppingForm'

class PizzaToppings extends React.PureComponent {
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
    console.log(this.props)
    return (
      <div className="toppingBTNContainer">
        {this.props.toppings.map(topping => {
          return (

              <div>
                <button
                  name={topping.id}
                  key={topping.id}
                  component="input"
                  className="toppingButton"
                  onClick={() => this.onChange(topping.id)}

                >{topping.name}</button>

            </div>

          );
        })}
      </div>
    );
  }
}
const mapStateToProps = function(state) {
  return {
    toppings: state.pizzaToppings,


  };
};

export default connect(mapStateToProps,{})(PizzaToppings);
