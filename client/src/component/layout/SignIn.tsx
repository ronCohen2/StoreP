import React from "react";
import { NavItem } from "reactstrap";
import Login from "../auth/Login";
import RegisterStep2 from "../auth/RegisterStep2";

export default function SignInlayout(props: any) {
  return (
    <div>
      w
      <NavItem>
        <Login />
        <RegisterStep2 />
      </NavItem>
      <NavItem>Register</NavItem>
    </div>
  );
}
