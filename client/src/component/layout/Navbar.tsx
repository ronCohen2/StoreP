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

class NavbarC extends React.Component<any, any> {
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
    // const { role } = this.props.auth.user;
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
                      <NavLink to={"/category/all"} className="d-2 text-white">
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
                  {this.props.auth.userConnected &&
                  this.props.auth.user.role ? (
                    <Col className="">
                      <AdminTab />
                    </Col>
                  ) : null}
                </Row>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  null
)(NavbarC);
