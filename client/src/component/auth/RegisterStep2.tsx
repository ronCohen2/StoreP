import React, { Component } from "react";
import {
  Button,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  Form
} from "reactstrap";
import "./auth.css";
import { connect } from "react-redux";
import { Rstep2 } from "../../store/action/authAction";

class RegisterStep2 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  handleSubmit = (e: any) => {
    const { fname, lname, city, street, phone } = this.state;
    const { id } = this.props.auth;
    console.log(this.state, id);
    e.preventDefault();
    this.props.Rstep2(fname, lname, city, street, phone, id);
  };

  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <Container className="border">
        <Form onSubmit={this.handleSubmit}>
          <Row className="m-3">
            <Col className="to-center ">Sign up</Col>
            <Col className="to-center font-weight-bold">User Details</Col>
            <Col className="to-center">Phone Verfication</Col>
          </Row>
          <Row>
            <Col>
              <InputGroup>
                <Input
                  placeholder="City"
                  type="text"
                  className="input-register "
                  id="city"
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
                  placeholder="Street"
                  className="input-register "
                  id="street"
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
                  placeholder="First Name"
                  type="text"
                  className="input-register "
                  id="fname"
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
                  placeholder=" Last name"
                  type="text"
                  className="input-register "
                  id="lname"
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
                  placeholder="Phone Number"
                  type="text"
                  className="input-register "
                  id="phone"
                  onChange={this.handleChange}
                  required
                />
              </InputGroup>
            </Col>
          </Row>
          <div className="d-flex justify-content-end">
            <Button className="d-flex justify-content-end">Next</Button>
          </div>
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
    Rstep2: (
      city: String,
      street: String,
      fname: String,
      lname: String,
      phone: Number,
      id: String
    ) => dispatch(Rstep2(city, street, fname, lname, phone, id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterStep2);
