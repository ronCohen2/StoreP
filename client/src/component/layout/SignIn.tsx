import React from "react";
import { NavItem } from "reactstrap";
import Login from "../auth/Login";

export default function SignInlayout(props: any) {
  return (
    <div>
      w
      <NavItem>
        <Login />
      </NavItem>
      <NavItem>Register</NavItem>
    </div>
  );
}
