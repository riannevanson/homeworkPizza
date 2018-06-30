import * as React from "react";
import { connect } from "react-redux";


class PizzaContainer extends React.PureComponent {

  state = { value: ''}
handleChange(event){
  this.setState({value: event.target.value})
}

  componentDidMount() {}

  render() {

    return (
      <div>
        Descide on what pizza you want
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps,{})(PizzaContainer);
