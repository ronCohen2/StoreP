import React from "react";
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
  InputGroup,
  InputGroupAddon,
  Input,
  Col,
  Row,
  Button
} from "reactstrap";
import SignOut from "./signOut";

export default class TopNav extends React.Component {
  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    const { isOpen }: any = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }
  render() {
    const { isOpen }: any = this.state;

    return (
      <Container>
        <Navbar>
          <NavbarBrand>
            <img src="https://www.luzuk.com/demo/supermarket-ecommerce/wp-content/uploads/2019/03/logo.png" />
          </NavbarBrand>
          <Nav navbar>
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="prepend">
                <Button color="secondary">Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Nav>
          <SignOut />
        </Navbar>
      </Container>
    );
  }
}
