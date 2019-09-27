import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Col,
  Row,
  Button
} from "reactstrap";
import SignInlayout from "./SignIn";
import { connect } from "react-redux";
import SignOut from "./signOut";

class TopNav extends React.Component<any, any> {
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
    const { userConnected } = this.props.auth;

    return (
      <Container>
        <Row className="pt-4   mb-3  bg-white">
          <Col sm="12" md="3">
            <img src="https://www.luzuk.com/demo/supermarket-ecommerce/wp-content/uploads/2019/03/logo.png" />
          </Col>
          <Col sm="12" md="7">
            <InputGroup>
              <Input />
              <InputGroupAddon addonType="prepend">
                <Button color="secondary">Search</Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
          <Col sm="12" md="2">
            {userConnected ? <SignOut /> : <SignInlayout />}
          </Col>
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopNav);
