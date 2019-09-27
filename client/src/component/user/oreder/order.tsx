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
import { connect } from "react-redux";
import { order as Order } from "../../../store/action/cartAction";

class order extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      street: null,
      city: null
    };
  }

  handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  setToStreet = () => {
    const { street } = this.props.auth.user;
    this.setState({
      street: street
    });
  };
  setToCity = () => {
    const { city } = this.props.auth.user;
    this.setState({
      city
    });
  };
  checkShipDate = (e: any) => {
    console.log(e.target.value);
  };
  onSubmit = (e: any) => {
    e.preventdefault();
    console.log(this.state);
  };
  render() {
    const { items } = this.props.cart;
    return (
      <Container>
        <Form>
          <Row className="">
            <Col>
              <h4>Billing details</h4>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  id="city"
                  placeholder="e.g Tel Aviv"
                  onChange={this.handleChange}
                  value={this.state.city}
                  required
                  onDoubleClick={() => this.setToCity()}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Street">Street</Label>
                <Input
                  id="Street"
                  placeholder="e.g Rothschild"
                  onChange={this.handleChange}
                  value={this.state.street}
                  required
                  onDoubleClick={() => this.setToStreet()}
                />
              </FormGroup>
              <FormGroup>
                <Label for="date">Order Date</Label>
                <Input
                  type="date"
                  id="date"
                  onChange={e => this.checkShipDate(e)}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
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
          </Row>
          <Row>
            <Col>
              <Table borded>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th> Quantinty</th>
                    <th> Price</th>
                  </tr>
                </thead>
                <tbody>
                  {items
                    ? items.map((item: any, key: Number) => {
                        return (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.totalPrice}</td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type="submit"
                value="Order"
                onClick={e => this.onSubmit(e)}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    cart: state.cart,
    auth: state.auth
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    order: (
      userId: String,
      cartId: String,
      totalPrice: Number,
      city: String,
      street: String,
      shipDate: any,
      creditCard: Number
    ) =>
      dispatch(
        Order(userId, cartId, totalPrice, city, street, shipDate, creditCard)
      )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(order);
