import * as React from "react";
import { connect } from "react-redux";

let SignOut: React.SFC<any> = (props: any) => {
  const { firstName } = props.auth.user;
  return (
    <div>
      <span className="pr-4"> Hi {firstName} </span>
      <span>Log out</span>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  null
)(SignOut);
