import * as React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form'

class PizzaBase extends React.PureComponent {

  state = { value: ''}
handleChange(event){
  this.setState({value: event.target.value})
}


  componentDidMount() {}

  render() {
      console.log(this.props);
    return (
      <form>

        Choose your pizza base
        <select>{this.props.pizzaBase.map(base =>{
        return (<option value="{base.size}" className="baseSize">Basesize of {base.size} cm</option>)
        })
      }</select>
      <submit>Submit</submit>
    </form>
    );
  }
}
const mapStateToProps = function (state) {
  return {
    pizzaBase: state.pizzaBase
  }
}

export default connect(mapStateToProps,{})(PizzaBase);
