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
  Col,
  Row
} from "reactstrap";
import CategoryDropDown from "./CategoryDropDown";
export default class NavbarC extends React.Component {
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
      <div>
        <Navbar className="p-3  navb" light expand="md">
          <Container>
            <NavbarBrand>
              <CategoryDropDown />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="m-auto" navbar>
                <Row>
                  <Col>
                    <NavItem className="d-2 text-white">
                      <NavLink className="d-2 text-white" href="/components/">
                        Home
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col>
                    <NavItem className="d-2 text-white">
                      <NavLink className="d-2 text-white" href="/components/">
                        Shop
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col>
                    <NavItem className="d-2 text-white">
                      <NavLink
                        className="d-2 text-white ml-2"
                        href="/components/"
                      >
                        Contact
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col className="mr-4">
                    <NavItem>
                      <NavLink className="d-2 text-white " href="/components/">
                        About
                      </NavLink>
                    </NavItem>
                  </Col>
                </Row>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
