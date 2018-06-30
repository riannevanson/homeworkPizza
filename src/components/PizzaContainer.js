import * as React from "react";
import { connect } from "react-redux";


class PizzaContainer extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        'hi Pizza'
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps,{})(PizzaContainer);
