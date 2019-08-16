import React, { Component } from "react";
import { connect } from "react-redux";
import { string, any } from "prop-types";
import { searchProducts } from "../../../store/action/productAction";
import { ThunkDispatch } from "redux-thunk";

class home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.searchProducts("as");
  }
  render() {
    console.log(this.props);
    let { ron }: any = this.props;
    console.log(ron);
    return <div>rblbl</div>;
  }
}
const mapStateToProps = (state: any) => {
  console.log(state.auth);
  return {
    ron: state.auth
  };
};
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    searchProducts: (product: String) => dispatch(searchProducts(product))
  };
};

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(home);
