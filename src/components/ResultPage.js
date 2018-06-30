import * as React from "react";
import { connect } from "react-redux";


class ResultPage extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        You have bought this pizza!
        And it costed this much!
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps,{})(ResultPage);
