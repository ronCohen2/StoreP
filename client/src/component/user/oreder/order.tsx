import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
class order extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col lg="6">
              <h4>Billing details</h4>
              <FormGroup>
                <Label for="city">City</Label>
                <Input id="city" placeholder="e.g Tel Aviv" required />
              </FormGroup>
              <FormGroup>
                <Label for="Street">Street</Label>
                <Input id="Street" placeholder="e.g Rothschild" required />
              </FormGroup>
              <FormGroup>
                <Label for="date">Order Date</Label>
                <Input type="date" id="date" required />
              </FormGroup>
            </Col>
            <Col lg="6">
              <h4>Additional information</h4>
              <FormGroup>
                <Label for="CreditCard">Credit Card</Label>
                <Input
                  id="CreditCard"
                  placeholder="1234-5678-1234-5678"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="CreditCard">Cardholder Name</Label>
                <Input id="name" required placeholder="e.g John Doe" />
              </FormGroup>
              <FormGroup className="d-flex justify-content-between">
                <div>
                  <Label for="expirdate">Expiration Date</Label>
                  <Input id="expirdate" placeholder="mm/yy" required />
                </div>
                <div>
                  <Label for="cvv">CVV</Label>
                  <Input id="cvv" placeholder="XXX" required />
                </div>
              </FormGroup>
            </Col>
            <input type="submit" value="" />
          </Row>
        </Form>
        <Row>
          <Col>asdsd</Col>
        </Row>
      </Container>
    );
  }
}

export default order;
