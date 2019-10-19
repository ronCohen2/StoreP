import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  InputGroup,
  Input,
  Button,
  Form,
  Alert
} from "reactstrap";
import "./auth.css";
import { connect } from "react-redux";
import { Rstep1 } from "../../store/action/authAction";
import { withRouter } from "react-router";

class RegisterStep1 extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      userId: null,
      email: null,
      password: null,
      confirmPassword: null
    };
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = async (e: any) => {
    const { userId, email, password, confirmPassword } = this.state;
    e.preventDefault();
    await this.props.RegisterS1(userId, email, password, confirmPassword);
  };

  render() {
    const { registerErr } = this.props.auth;
    return (
      <Container className="p-4  mt-3 mb-3 border ">
        <Form onSubmit={this.handleSubmit}>
          <Row className="m-3">
            <Col className="to-center font-weight-bold">Sign up</Col>
            <Col className="to-center">User Details</Col>
            <Col className="to-center">Phone Verfication</Col>
          </Row>
          <Row>
            <Col className="">
              <InputGroup>
                <Input
                  type="number"
                  placeholder="Id"
                  className="input-register"
                  id="userId"
                  onChange={this.handleChange}
                  required
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup>
                <Input
                  placeholder="Email"
                  className="input-register "
                  id="email"
                  type="email"
                  onChange={this.handleChange}
                  required
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup>
                <Input
                  placeholder="Password"
                  type="password"
                  className="input-register "
                  id="password"
                  onChange={this.handleChange}
                  required
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup>
                <Input
                  placeholder=" Confirm Password"
                  type="password"
                  className="input-register "
                  id="confirmPassword"
                  onChange={this.handleChange}
                  required
                />
              </InputGroup>
            </Col>
          </Row>
          {registerErr
            ? registerErr.map((err: any, key: Number) => {
                return <Alert color="danger">{err}</Alert>;
              })
            : null}
          <Button className="to-end">Next</Button>
        </Form>
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
  return {
    RegisterS1: (
      userId: Number,
      email: String,
      password: String,
      confirmPassword: String
    ) => dispatch(Rstep1(userId, email, password, confirmPassword))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RegisterStep1));
