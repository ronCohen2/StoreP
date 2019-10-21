import React from "react";
import { NavItem, Label } from "reactstrap";
import Login from "../auth/Login";
import RegisterStep2 from "../auth/RegisterStep2";
import { withRouter } from "react-router";

function SignInlayout(props: any) {
  return (
    <div className="to-center">
      <Login />
      <Label onClick={() => props.history.push("/register")}>Register</Label>
    </div>
  );
}
export default withRouter(SignInlayout);
