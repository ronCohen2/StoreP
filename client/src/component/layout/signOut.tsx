import * as React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Col,
  Row
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

let SignOut: React.SFC<any> = () => {
  return (
    <Container>
      <Row>
        <Col>
          <NavItem>
            <NavLink>cart</NavLink>
          </NavItem>
        </Col>
        <Col>
          <NavItem>
            <NavLink>cart</NavLink>
          </NavItem>
        </Col>
      </Row>
    </Container>
  );
};
export default SignOut;
