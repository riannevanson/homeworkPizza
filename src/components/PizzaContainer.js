import * as React from "react";
import { connect } from "react-redux";
import SimpleForm from './SimpleForm'


class PizzaContainer extends React.PureComponent {



  componentDidMount() {}

  render() {

    return (
      <div>
      <h2>  Descide on what pizza you want </h2>
  
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { state };
};
export default connect(mapStateToProps,{})(PizzaContainer);
