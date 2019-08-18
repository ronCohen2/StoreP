import React, { Component } from "react";
import { connect } from "react-redux";
import { string, any } from "prop-types";
import { registerVerif } from "../../../store/action/authAction";
import { ThunkDispatch } from "redux-thunk";

class home extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.registerVerif(123123, "ronc@gmailk.com", 123123, 123123);
  }
  render() {
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
    registerVerif: (ID: Number, email: String, password: any, password2: any) =>
      dispatch(registerVerif(ID, email, password, password2))
  };
};

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps
)(home);
