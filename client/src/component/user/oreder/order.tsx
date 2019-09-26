import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Table
} from "reactstrap";
class order extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <Container>
        <Form>
          <Row>
            <Col lg="6">
              <h4>Billing details</h4>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  id="city"
                  placeholder="e.g Tel Aviv"
                  onChange={this.handleChange}
                  required
                  onDoubleClick={() => alert("sdf")}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Street">Street</Label>
                <Input
                  id="Street"
                  placeholder="e.g Rothschild"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Order Date</Label>
                <Input
                  type="date"
                  id="date"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <h4>Additional information</h4>
              <FormGroup>
                <Label for="CreditCard">Credit Card</Label>
                <Input
                  id="CreditCard"
                  placeholder="1234-5678-1234-5678"
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="CreditCard">Cardholder Name</Label>
                <Input
                  id="name"
                  required
                  placeholder="e.g John Doe"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup className="d-flex justify-content-between">
                <div>
                  <Label for="expirdate">Expiration Date</Label>
                  <Input
                    id="expirdate"
                    placeholder="mm/yy"
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div>
                  <Label for="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="XXX"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </FormGroup>
            </Col>
            <input type="submit" value="" />
          </Row>
        </Form>
        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th> Quantinty</th>
                  <th> Price</th>
                </tr>
              </thead>
              <tbody>{/* all cart items */}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default order;
