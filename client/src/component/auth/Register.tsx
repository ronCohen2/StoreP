import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";
import RegisterStep3 from "./RegisterStep3";
import home from "../user/home/home";
import { withRouter } from "react-router";

class Register extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const { step } = this.props.auth;
    switch (step) {
      case 0:
        return <RegisterStep1 />;
      case 1:
        return <RegisterStep2 />;
      case 2:
        return <RegisterStep3 />;
      case 3:
        return this.props.history.push("/");

      default:
    }
  }
}
const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  null
)(withRouter(Register));
