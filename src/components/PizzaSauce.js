import * as React from "react";
import { connect } from "react-redux";


class PizzaSauce extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        Sauces
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps,{})(PizzaSauce);
