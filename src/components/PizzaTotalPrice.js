import * as React from "react";
import { connect } from "react-redux";


class PizzaTotalPrice extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
       Total price
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps,{})(PizzaTotalPrice);
