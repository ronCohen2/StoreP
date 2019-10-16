import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Col,
  Row
} from "reactstrap";
import { NavLink } from "react-router-dom";
import CategoryDropDown from "./CategoryDropDown";
import AdminTab from "./AdminTab";
import { connect } from "react-redux";

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
      <div className="navb">
        <Navbar light expand="md">
          <Container>
            <NavbarBrand>
              <CategoryDropDown />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="m-auto" navbar>
                <Row>
                  <Col>
                    <NavItem>
                      <NavLink to={"/"} className="d-2 text-white">
                        Home
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col>
                    <NavItem>
                      <NavLink to={"/shop"} className="d-2 text-white">
                        Shop
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col>
                    <NavItem>
                      <NavLink to={"/contact"} className="d-2 text-white">
                        Contact
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col className="">
                    <NavItem>
                      <NavLink to={"/about"} className="d-2 text-white">
                        About
                      </NavLink>
                    </NavItem>
                  </Col>
                  <Col className="">
                    <AdminTab />
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
