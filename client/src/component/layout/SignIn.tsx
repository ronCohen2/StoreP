import * as React from "react";
import { NavItem } from "reactstrap";
import Login from "../auth/Login";
let SignIn: React.SFC<any> = () => {
  return (
    <div>
      <NavItem>
        <Login />
      </NavItem>
      <NavItem>Register </NavItem>
    </div>
  );
};
export default SignIn;
