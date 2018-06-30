import * as React from "react";
import { connect } from "react-redux";


class PizzaToppings extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        Toppings
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps,{})(PizzaToppings);
