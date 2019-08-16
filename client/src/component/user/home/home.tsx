import React, { Component } from "react";
import { connect } from "react-redux";
import { string, any } from "prop-types";
import {
  addProduct,
  getAllProductsByCategory
} from "../../../store/action/adminAction";
import { ThunkDispatch } from "redux-thunk";

class home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.login("aasdasd", "Sdsafsdf", 123, "sdfasasdf");
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
    login: (
      productName: String,
      categoryId: String,
      price: Number,
      image: String
    ) => dispatch(addProduct(productName, categoryId, price, image))
  };
};

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(home);
