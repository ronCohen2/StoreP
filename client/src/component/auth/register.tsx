import React, { Component } from "react";
import { Row, Col, Container, InputGroup, Input, Button } from "reactstrap";
class register extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  handleChange = (e: any) => {};
  render() {
    return (
      <Container className="p-4  mt-3 mb-3 rounded ">
        <Row>
          <Col className="d-flex justify-content-around">
            <p className="font-weight-bold">1 Sign Up</p>
            <p>2 User Details</p>
          </Col>
        </Row>
        <Row>
          <Col md="9" className="bg ">
            <InputGroup>
              <Input
                placeholder="Id"
                className="input-register "
                id="id"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Input
                placeholder="Email"
                className="input-register "
                id="email"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Input
                placeholder="Password"
                type="password"
                className="input-register "
                id="password"
                onChange={this.handleChange}
              />
            </InputGroup>
            <InputGroup>
              <Input
                placeholder=" Confirm Password"
                type="password"
                className="input-register "
                id="co-password"
                onChange={this.handleChange}
              />
            </InputGroup>
            <div className="d-flex justify-content-end">
              <Button className="d-flex justify-content-end">Next</Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default register;
