import React from "react";
import { NavItem, Label } from "reactstrap";
import Login from "../auth/Login";
import RegisterStep2 from "../auth/RegisterStep2";

export default function SignInlayout(props: any) {
  return (
    <div className="to-center">
      <Login />
      <Label>Register</Label>
    </div>
  );
}
