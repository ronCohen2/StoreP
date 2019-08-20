import React, { Component } from "react";
import { connect } from "react-redux";
import { string, any } from "prop-types";
import { registerVerif } from "../../../store/action/authAction";
import { ThunkDispatch } from "redux-thunk";
import Carousel from "./Carousel";
import CategoryHome from "./CategoryHome";
import "./home.css";
import StatisticData from "./StatisticData";
class home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.registerVerif(123123, "ronc@gmailk.com", 123123, 123123);
  }
  render() {
    return (
      <div>
        <Carousel />
        <CategoryHome id="5d5bd6960a5a7d1ab05da2cf" />
        <StatisticData />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    ron: state.auth
  };
};
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>) => {
  return {
    registerVerif: (ID: Number, email: String, password: any, password2: any) =>
      dispatch(registerVerif(ID, email, password, password2))
  };
};

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(home);
