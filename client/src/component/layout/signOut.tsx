import * as React from "react";
import { connect } from "react-redux";
import { Logout } from "../../store/action/authAction";
import { withRouter } from "react-router";
let SignOut: React.SFC<any> = (props: any) => {
  const { firstName } = props.auth.user;
  const toHomePage = () => {
    props.history.push("/");
  };
  return (
    <div>
      <span className="pr-4"> Hi {firstName} </span>
      <span onClick={() => props.logOut(toHomePage)}>Log out</span>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    logOut: (toHomePage: any) => dispatch(Logout(toHomePage))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignOut));
